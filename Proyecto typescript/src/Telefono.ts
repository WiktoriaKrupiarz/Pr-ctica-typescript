export class Telefono {

    private _tipo;
    private _numero;

    constructor(tipo: String, numero: Number) {
        this._tipo = tipo;
        this._numero = numero;
    }

    public get tipo() {
        return this._tipo;
    }
    public get numero() {
        return this._numero;
    }

    public set tipo(tipo) {
        this._tipo = tipo;
    }
    public set numero(numero) {
        this._numero = numero;
    }

    toString() {
        return this._tipo + ': ' + this._numero;
    }
}
