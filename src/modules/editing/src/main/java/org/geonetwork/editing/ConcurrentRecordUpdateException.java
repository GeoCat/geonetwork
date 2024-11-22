/*
 * (c) 2003 Open Source Geospatial Foundation - all rights reserved
 * This code is licensed under the GPL 2.0 license,
 * available at the root application directory.
 */
package org.geonetwork.editing;

public class ConcurrentRecordUpdateException extends RuntimeException {
    public ConcurrentRecordUpdateException(String message) {
        super(message);
    }
}
