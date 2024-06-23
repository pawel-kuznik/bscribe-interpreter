import { FileReader } from "./FileReader";

describe("FileReader", () => {

    it('should read from a file a rooster', async () => {

        const reader = new FileReader();

        const roster = await reader.read(__dirname + "/../data/space_marines_test_rooster.rosz");

        expect(roster.name).toEqual("Space Marines Test Rooster");
        expect(roster.points).toEqual(160);
        expect(roster.pointsLimit).toEqual(1000);
    });

    it('should parse a force', async () => {

        const reader = new FileReader();

        const roster = await reader.read(__dirname + "/../data/space_marines_test_rooster.rosz");

        expect(roster.forces).toHaveLength(1);
    });
});