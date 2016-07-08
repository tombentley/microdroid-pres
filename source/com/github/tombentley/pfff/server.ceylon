import ceylon.http.common {
    get,
    Header
}
import ceylon.http.server {
    newServer,
    Endpoint,
    Request,
    Response,
    startsWith,
    AsynchronousEndpoint,
    isRoot
}
import ceylon.http.server.endpoints {
    serveStaticFile
}
import ceylon.io {
    SocketAddress
}

"Start a webserver to serve the presentation.
 Looks for a --port command line argument, defaults to 8080 if absent."
shared Integer server() {
    //create a HTTP server
    value etag = system.milliseconds;
    value server = newServer {
        AsynchronousEndpoint {
            path = startsWith("/css");
            acceptMethod = { get };
            service = serveStaticFile {
                externalPath = ".";
            };
        },
        AsynchronousEndpoint {
            path = startsWith("/js");
            acceptMethod = { get };
            service = serveStaticFile {
                externalPath = ".";
            };
        },
        Endpoint {
            path = isRoot();
            acceptMethod = { get };
            void service(Request request, Response response) {
                if (exists inm = request.header("If-None-Match"),
                    inm ==etag.string) {
                    response.status = 304;
                } else {
                    response.addHeader(Header("Etag", etag.string));
                    StringBuilder sb = StringBuilder();
                    presentation.render(sb.append);
                    print(sb.string);
                    response.writeString(sb.string);
                }
            }
        }
    };
    value port = parseInteger(process.namedArgumentValue("port") else "8080");
    if (!exists port) {
        process.writeErrorLine("invalid --port");
        return 1;
    } else {
        //start the server on port 8080
        try {
            server.start(SocketAddress("127.0.0.1", port));
            return 0;
        } catch (Exception e) {
            return 2;
        }
    }
}