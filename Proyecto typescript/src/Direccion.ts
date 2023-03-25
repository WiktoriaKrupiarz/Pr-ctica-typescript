export class Direccion {

    private _calle;
    private _numero;
    private _piso;
    private _letra;
    private _codigoPostal;
    private _poblacion;
    private _provincia;

    constructor(calle: String, numero: Number, piso: Number, letra: String, codigoPostal: Number, poblacion: String, provincia: String) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    public get calle() {
        return this._calle;
    }
    public get numero() {
        return this._numero;
    }
    public get piso() {
        return this._piso;
    }
    public get letra() {
        return this._letra;
    }
    public get codigoPostal() {
        return this._codigoPostal;
    }
    public get poblacion() {
        return this._poblacion;
    }
    public get provincia() {
        return this._provincia;
    }

    public set calle(value) {
        this._calle = value;
    }
    public set numero(value) {
        this._numero = value;
    }
    public set piso(value) {
        this._piso = value;
    }
    public set letra(value) {
        this._letra = value;
    }
    public set codigoPostal(value) {
        this._codigoPostal = value;
    }
    public set poblacion(value) {
        this._poblacion = value;
    }
    public set provincia(value) {
        this._provincia = value;
    }

    toString() {
        return this._calle + ' ' + this._numero + ' '
            + this.piso + ' ' + this._letra + ' '
            + this._codigoPostal + ' ' + this.poblacion + ' ' + this.provincia;
    }
}