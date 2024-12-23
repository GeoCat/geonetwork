import { Component, effect, input, signal } from '@angular/core';
import Papa from 'papaparse';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';

@Component({
  selector: 'g-data-table',
  templateUrl: './data-table.component.html',
  standalone: true,
  imports: [TableModule, Button],
})
export class DataTableComponent {
  source = input.required<string>();
  isAllowingExport = input<boolean>(false);

  data = signal<Array<any>>([]);
  isLoading = false;
  headerData: Array<any> = [];
  error: string | undefined = undefined;

  constructor() {
    effect(() => {
      this.parseCsv(this.source());
    });
  }

  parseCsv(source: string) {
    this.isLoading = true;
    let that = this;
    this.headerData = [];
    this.error = undefined;

    Papa.parse<Array<any>>(source, {
      download: true,
      // delimitersToGuess: [';', ',', '\t', '|', Papa.RECORD_SEP, Papa.UNIT_SEP],
      // header: true,
      // dynamicTyping: true,
      complete: (results, file) => {
        let data: any[] = [];
        if (results.errors.length) {
          console.error('Errors while parsing:', results.errors);
          this.error = 'Error while parsing CSV file.';
        } else {
          this.headerData = results.data[0].map(columnName => {
            return {
              field: columnName,
              label: columnName,
            };
          });
          results.data.slice(1).forEach((row, index) => {
            let object: any = {};
            row.map((value, index) => {
              object[this.headerData[index].field] = value;
            });
            data.push(object);
          });
          this.data.set(data);
        }
        this.isLoading = false;
      },
      error(error: Error, file: string) {
        console.error('Error while parsing:', error);
        that.isLoading = false;
        that.error = 'Error while downloading or parsing CSV file.';
      },
    });
  }
}
