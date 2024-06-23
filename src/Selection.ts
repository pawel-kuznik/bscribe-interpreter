export class Selection {

    private _root: Element;

    get name() : string { return this._root.getAttribute("name") || ""; }
    get type() : string { return this._root.getAttribute("type") || ""; }

    constructor(root: Element) {

        this._root = root;
    }
};
