import { promises as fsPromises } from "fs";
import { Roster } from "./Roster";
import fflate from "fflate";

export class FileReader {

    async read(path: string) : Promise<Roster> {

        const file = await fsPromises.readFile(path);
        
        const unzipped = fflate.unzipSync(file);

        // zipped file can contain a number of files inside. In practice
        // it will be one roster file for us, but we need to get all of them.
        const paths = Object.getOwnPropertyNames(unzipped);

        for (let p of paths) {

            const blob = new Blob([unzipped[p]]);
            const text = await blob.text();

            return new Roster(text);
        }

        throw new Error("No roster found");
    }
}