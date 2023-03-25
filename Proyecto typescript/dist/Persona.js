"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const Direccion_1 = require("./Direccion");
const Mail_1 = require("./Mail");
const Telefono_1 = require("./Telefono");
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFav, sexo, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFav = colorFav;
        this._sexo = sexo;
        this._direcciones = [];
        this._mails = [];
        this._telefonos = [];
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    get colorFav() {
        return this._colorFav;
    }
    get sexo() {
        return this._sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    get mails() {
        return this._mails;
    }
    get telefonos() {
        return this._telefonos;
    }
    get notas() {
        return this._notas;
    }
    set nombre(value) {
        this._nombre = value;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    set edad(value) {
        this._edad = value;
    }
    set dni(value) {
        this._dni = value;
    }
    set cumpleaños(value) {
        this._cumpleaños = value;
    }
    set colorFav(value) {
        this._colorFav = value;
    }
    set sexo(value) {
        this._sexo = value;
    }
    set direcciones(value) {
        this._direcciones = value;
    }
    set mails(value) {
        this._mails = value;
    }
    set telefonos(value) {
        this._telefonos = value;
    }
    set notas(value) {
        this._notas = value;
    }
    toString() {
        return this._nombre + ' ' + this._apellidos + ', Edad: ' + this._edad + ', DNI: ' + this._dni
            + ' Cumpleaños: ' + this.cumpleaños + ', Color Favorito: ' + this._colorFav
            + '\nDirecciones: ' + this._direcciones + '\nMails: ' + this._mails
            + '\nTelefonos: ' + this._telefonos + '\nNotas: ' + this._notas;
    }
    addTlfn(tipo, numero) {
        let telefono = new Telefono_1.Telefono(tipo, numero);
        this._telefonos.push(telefono);
    }
    addDireccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        let direccion = new Direccion_1.Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia);
        this._direcciones.push(direccion);
    }
    addMail(tipo, direccion) {
        let mail = new Mail_1.Mail(tipo, direccion);
        this._mails.push(mail);
    }
}
exports.Persona = Persona;
