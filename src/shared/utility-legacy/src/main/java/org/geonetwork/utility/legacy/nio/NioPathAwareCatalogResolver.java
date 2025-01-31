/*
 * (c) 2003 Open Source Geospatial Foundation - all rights reserved
 * This code is licensed under the GPL 2.0 license,
 * available at the root application directory.
 */
package org.geonetwork.utility.legacy.nio;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;
import java.util.Vector;
import javax.xml.transform.Source;
import javax.xml.transform.TransformerException;
import javax.xml.transform.sax.SAXSource;
import org.apache.xml.resolver.CatalogManager;
import org.apache.xml.resolver.tools.CatalogResolver;
import org.geonetwork.constants.Constants;
import org.geonetwork.utility.legacy.io.IO;
import org.geonetwork.utility.legacy.resolver.ResolverRewriteDirective;
import org.geonetwork.utility.legacy.xml.Xml;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

/**
 * A CatalogResolver that can resolve paths as well as URIs.
 *
 * @author Jesse on 11/4/2014.
 */
public class NioPathAwareCatalogResolver extends CatalogResolver {
    private static final Map<Object, ResolverRewriteDirective> urlRewriteDirectives = new HashMap<>();

    public NioPathAwareCatalogResolver(CatalogManager catMan) {
        super(catMan);
        final Vector catalogFiles = catMan.getCatalogFiles();
        // any catalogFiles that are paths and not files must be handled by this child.
        for (Object catalogFile : catalogFiles) {
            final String path = catalogFile.toString();
            if (!new File(path).exists() && Files.exists(IO.toPath(path))) {
                try {
                    final String xml = Files.readString(IO.toPath(path), Constants.CHARSET);
                    Xml.loadString(xml, false);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }

    public static void addRewriteDirective(ResolverRewriteDirective urlRewrite) {
        urlRewriteDirectives.put(urlRewrite.getKey(), urlRewrite);
    }

    @Override
    public String getResolvedEntity(String publicId, String systemId) {
        return super.getResolvedEntity(publicId, systemId);
    }

    @Override
    public InputSource resolveEntity(String publicId, String systemId) {
        try {
            final InputSource inputSource = Xml.PATH_RESOLVER.resolveEntity(publicId, systemId);
            if (inputSource != null) {
                return inputSource;
            }
        } catch (SAXException | IOException e) {
            throw new RuntimeException(e);
        }
        return super.resolveEntity(publicId, systemId);
    }

    @Override
    public Source resolve(String href, String base) throws TransformerException {
        // For http resources delegate to parent class
        if (href.startsWith("http")) {
            return super.resolve(href, base);
        }

        for (ResolverRewriteDirective urlRewrite : urlRewriteDirectives.values()) {
            if (urlRewrite.appliesTo(href)) {
                href = urlRewrite.rewrite(href);
                break;
            }
        }
        try {
            Path resolvedResource;
            try {
                resolvedResource = IO.toPath(new URI(href));
                if (Files.isRegularFile(resolvedResource)) {
                    return toPathInputSource(resolvedResource);
                } else {
                    SAXSource source = new SAXSource();
                    source.setSystemId(href);
                    return source;
                }
            } catch (URISyntaxException | IllegalArgumentException e) {
                final Path basePath = IO.toPath(new URI(base));
                Path parent = basePath.getParent();
                if (parent == null) {
                    throw new RuntimeException(basePath.getFileName() + " does not have parent");
                }
                resolvedResource = parent.resolve(href);

                if (Files.isRegularFile(resolvedResource)) {
                    return toPathInputSource(resolvedResource);
                }
            }
        } catch (RuntimeException e) {
            throw e;

        } catch (Exception e) {
            // ignore
        }

        return super.resolve(href, base);
    }

    private PathStreamSource toPathInputSource(Path resolvedResource) {
        final PathStreamSource pathInputSource = new PathStreamSource(resolvedResource);
        pathInputSource.setSystemId(resolvedResource.toUri().toASCIIString());
        return pathInputSource;
    }
}
