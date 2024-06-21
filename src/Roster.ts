import { JSDOM } from "jsdom";

export class Roster {

    private _root: XMLDocument;

    get name() : string { return this._root.querySelector("roster")?.getAttribute("name") || ""; }

    constructor(xmlInput?: string) {

        // this is a fun one. We could use just a browser DOMParser, but this lib should
        // work both in browser and node environment. Node doesn't have a DOMParser, so
        // we need to get one that will consistently be there in both environments. JSDOM to the rescue.
        const jsdom = new JSDOM();

        const parser = new jsdom.window.DOMParser();
        const root = parser.parseFromString(xmlInput || "", "application/xml");

        this._root = root;
    }

    toXMLString() {

        const serializer = new XMLSerializer();
        return serializer.serializeToString(this._root);
    }
};
