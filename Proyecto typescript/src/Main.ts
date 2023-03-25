import { Persona } from "./Persona";

//Persona-------------------------------------------------------------------------------------------
let personaAlba = new Persona('Alba', 'Suarez', 29, '98765790W', '21/08/1945',
    'morado', 'F', '');
personaAlba.addTlfn('movil', 234567765);
personaAlba.addDireccion('Hernan Cortes', 12, 2, 'A', 22200, 'Sevilla', 'Sevilla');
personaAlba.addMail('outlook', 'suarez.alba@outllook.com');

//Persona-------------------------------------------------------------------------------------------
let personaFrancisco = new Persona('Francisco', 'Hernandez', 56, '0456734G', '29/02/1960',
    'amarillo', 'M', '');
personaFrancisco.addTlfn('casa', 987654456);
personaFrancisco.addDireccion('Adolfo Suarez', 5, 2, 'D', 23500, 'Madrid', 'Madrid');
personaFrancisco.addMail('gmail', 'Francisco1960@gmail.com');

//Persona-------------------------------------------------------------------------------------------
let personaEmilio = new Persona('Emilio', 'Clarin', 71, '456317899L', '4/12/1972',
    'verde', 'M', '');
personaEmilio.addTlfn('casa', 456321765);
personaEmilio.addDireccion('Juncal', 9, 4, 'C', 21300, 'Guadalajara', 'Madrid');
personaEmilio.addMail('gmail', 'Emilio1234@gmail.com');

//Logs----------------------------------------------------------------------------------------------
console.log('Personas: ');

console.log(personaEmilio.toString());
console.log('\n');

console.log(personaAlba.toString());
console.log('\n');

console.log(personaFrancisco.toString());
console.log('\n');

//Guardamos las personas en una lista para poder buscar por dni
let listaPersonas: Array<Persona> = [];
listaPersonas.push(personaAlba);
listaPersonas.push(personaEmilio);
listaPersonas.push(personaFrancisco);

let buscarDni = '456317899L'

for (let persona of listaPersonas.values()) {
    if (buscarDni === persona.dni) { 
        persona.addTlfn('movil', 234765123);
        persona.addDireccion('Avenida de America', 13, 5, 'H', 34500, 'Lugo', 'Jaen');
        persona.addMail('gmail', 'persona513@gmail.com');

        console.log('Persona modificada: ' + buscarDni);        
        console.log(persona.toString());
        
    }
}