"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    get numero() {
        return this._numero;
    }
    get piso() {
        return this._piso;
    }
    get letra() {
        return this._letra;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    get poblacion() {
        return this._poblacion;
    }
    get provincia() {
        return this._provincia;
    }
    set calle(value) {
        this._calle = value;
    }
    set numero(value) {
        this._numero = value;
    }
    set piso(value) {
        this._piso = value;
    }
    set letra(value) {
        this._letra = value;
    }
    set codigoPostal(value) {
        this._codigoPostal = value;
    }
    set poblacion(value) {
        this._poblacion = value;
    }
    set provincia(value) {
        this._provincia = value;
    }
    toString() {
        return this._calle + ' ' + this._numero + ' '
            + this.piso + ' ' + this._letra + ' '
            + this._codigoPostal + ' ' + this.poblacion + ' ' + this.provincia;
    }
}
exports.Direccion = Direccion;
