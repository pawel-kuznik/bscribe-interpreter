import { FileReader } from "./FileReader";

describe("FileReader", () => {

    it('should read from a file a rooster', () => {


        const reader = new FileReader();

        const rooster = reader.read(__dirname + "../data/space_marines_test_rooster.rosz");

        expect(rooster.name).toEqual("Space Marines Test Rooster");
    });
});