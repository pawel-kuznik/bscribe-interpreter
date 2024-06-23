export class Force {

    private _root: Element;
    private _selections: Selection[] = [];

    get name() : string { return this._root.getAttribute("name") || ''; }
    get catalogueName() : string { return this._root.getAttribute("catalogueName") || ''; }

    get selections() : Selection[] { return this._selections; }

    constructor(forceRootElement: Element) {

        this._root = forceRootElement;

        const xmlSelections = this._root.querySelectorAll("selections > selection");

        for (let xmlSelection of xmlSelections) {


            console.log(xmlSelection.getAttribute("name"));
        }
    }
};
