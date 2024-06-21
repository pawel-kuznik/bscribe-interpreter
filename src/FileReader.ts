import { promises as fsPromises } from "fs";
import { Rooster } from "./Rooster";

export class FileReader {

    async read(path: string) : Promise<Rooster> {

        const file = await fsPromises.readFile(path);

    

        return new Rooster;
    }
}