import {print} from '../util.js';

//input variable
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log("\n************** DELIVERABLE 04 *********************");

// 4. Read Books
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
// Opcional: Utiliza Typescript para añadir los tipos adecuados.

function isBookRead(books, titleToSearch) {
    if(books.find(book => book.title === titleToSearch) === undefined) {
      return false;
    }
  
    return books.find(book => book.title === titleToSearch).isRead;
  }
  
  print(false, isBookRead, books, "Devastación", "Canción de hielo y fuego", "Los Pilares de la Tierra" )
  