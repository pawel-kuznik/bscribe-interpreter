import { JSDOM } from "jsdom";
import { Force } from "./Force";

/**
 *  This is a class representing a roster. A roster has a name,
 *  points number, points limit, and a list of units that are on
 *  the roster.
 */
export class Roster {

    private _root: XMLDocument;
    private _forces: Force[] = [];

    get name() : string { return this._root.querySelector("roster")?.getAttribute("name") || ""; }
    get notes() : string { return this._root.querySelector("customNotes")?.textContent || ""; }

    get points() : number { return Number(this._root.querySelector('roster > costs > cost[name="pts"]')?.getAttribute("value")); }
    get pointsLimit() : number { return Number(this._root.querySelector('roster > costLimits > costLimit[name="pts"]')?.getAttribute("value")); }

    get forces() : Force[] { return this._forces; }

    constructor(xmlInput?: string) {

        // this is a fun one. We could use just a browser DOMParser, but this lib should
        // work both in browser and node environment. Node doesn't have a DOMParser, so
        // we need to get one that will consistently be there in both environments. JSDOM to the rescue.
        const jsdom = new JSDOM();

        const parser = new jsdom.window.DOMParser();
        const root = parser.parseFromString(xmlInput || "", "application/xml");

        const xmlForces = root.querySelectorAll("roster > forces");

        for (let xmlForce of xmlForces) {

            this._forces.push(new Force(xmlForce));
        }

        this._root = root;
    }

    toXMLString() {

        const serializer = new XMLSerializer();
        return serializer.serializeToString(this._root);
    }
};
