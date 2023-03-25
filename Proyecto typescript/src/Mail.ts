export class Mail {

    private _tipo;
    private _direccion;

    constructor(tipo: String, direccion: String) {
        this._tipo = tipo;
        this._direccion = direccion;
    }

    public get tipo() {
        return this._tipo;
    }
    public get direccion() {
        return this._direccion;
    }

    public set tipo(tipo) {
        this._tipo = tipo;
    }
    public set direccion(direccion) {
        this._direccion = direccion;
    }

    toString() {
        return this._tipo + ': ' + this._direccion;
    }
}