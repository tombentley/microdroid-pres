import java.io{...}
import java.lang{ByteArray}

"Write the presentation to the current directory"
shared void write(Presentation presentation) {
    File dest = File("a").absoluteFile.parentFile;
    File src = File("a").absoluteFile.parentFile;
    // Write the index
    File index = File(dest, "index.html");
    try(w = OutputStreamWriter(FileOutputStream(index), "UTF-8")) {
        object fudge {
            shared void write(String s) {
                w.write(s);
            }
        }
        presentation.render(fudge.write);
    }
    
    // And copy the supporting files
    File css = File(dest, "css");
    copy(File(src, "css"), css);
    
    File js = File(dest, "js");
    copy(File(src, "js"), js);
    
    // And copy all the svg in the root directory
    copy(src, dest, object satisfies FilenameFilter {
        shared actual Boolean accept(File? file, String? string) {
            if (exists string, string.endsWith(".svg")) {
                return true;
            }
            return false;
        }
        
        
    });
}



void copy(File src, File dest, FilenameFilter? filter = null) {
    if (src.directory) {
        if (!dest.mkdirs() && !dest.\iexists()) {
            throw IOException("Unable to create directory ``dest``");
        }
        for (file in src.listFiles(filter)) {
            copy(file, File(dest, file.name));
        }
    } else {
        if (exists filter, filter.accept(src.parentFile, src.name)) {
            try (input = FileInputStream(src)) {
                try (value output = FileOutputStream(dest)) {
                    value buffer = ByteArray(1024*8);
                    while(true) {
                        value bin = input.read(buffer);
                        if (bin < 0) {
                            break;
                        }
                        output.write(buffer, 0, bin);
                    } 
                }
            }
        }
    }
}