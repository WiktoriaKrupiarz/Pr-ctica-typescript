import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {

    private _nombre;
    private _apellidos;
    private _edad;
    private _dni;
    private _cumpleaños;
    private _colorFav;
    private _sexo;
    private _direcciones: Array<Direccion>;
    private _mails: Array<Mail>;
    private _telefonos: Array<Telefono>;
    private _notas;

    constructor(nombre: string, apellidos: string, edad: Number, dni: string,
        cumpleaños: string, colorFav: string, sexo: string, notas: string) {
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

    public get nombre() {
        return this._nombre;
    }
    public get apellidos() {
        return this._apellidos;
    }
    public get edad() {
        return this._edad;
    }
    public get dni() {
        return this._dni;
    }
    public get cumpleaños() {
        return this._cumpleaños;
    }
    public get colorFav() {
        return this._colorFav;
    }
    public get sexo() {
        return this._sexo;
    }
    public get direcciones() {
        return this._direcciones;
    }
    public get mails() {
        return this._mails;
    }
    public get telefonos() {
        return this._telefonos;
    }
    public get notas() {
        return this._notas;
    }

    public set nombre(value) {
        this._nombre = value;
    }
    public set apellidos(value) {
        this._apellidos = value;
    }
    public set edad(value) {
        this._edad = value;
    }
    public set dni(value) {
        this._dni = value;
    }
    public set cumpleaños(value) {
        this._cumpleaños = value;
    }
    public set colorFav(value) {
        this._colorFav = value;
    }
    public set sexo(value) {
        this._sexo = value;
    }
    public set direcciones(value) {
        this._direcciones = value;
    }
    public set mails(value) {
        this._mails = value;
    }
    public set telefonos(value) {
        this._telefonos = value;
    }
    public set notas(value) {
        this._notas = value;
    }

    toString() {
        return this._nombre + ' ' + this._apellidos + ', Edad: ' + this._edad + ', DNI: ' + this._dni
            + ' Cumpleaños: ' + this.cumpleaños + ', Color Favorito: ' + this._colorFav
            + '\nDirecciones: ' + this._direcciones + '\nMails: ' + this._mails
            + '\nTelefonos: ' + this._telefonos + '\nNotas: ' + this._notas;
    }

    addTlfn(tipo: String, numero: Number) {
        let telefono = new Telefono(tipo, numero);
        this._telefonos.push(telefono);
    }

    addDireccion(calle: String, numero: Number, piso: Number, letra: String, codigoPostal: Number, poblacion: String, provincia: String) {
        let direccion = new Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia);
        this._direcciones.push(direccion);
    }

    addMail(tipo: String, direccion: String) {
        let mail = new Mail(tipo, direccion);
        this._mails.push(mail);
    }
}