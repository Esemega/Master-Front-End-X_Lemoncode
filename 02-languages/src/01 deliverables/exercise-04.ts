//types
interface Book { title: string, isRead: boolean }; 
type IsBookRead = (books: Book[], titleToSearch:string) => boolean;

//input variable
const books:Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
const titles:string[] = ["Devastación", "Canción de hielo y fuego", "Los Pilares de la Tierra"];

// ************** 4. Read Books **************
console.log("\n************** DELIVERABLE 04 *********************");
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
// Opcional: Utiliza Typescript para añadir los tipos adecuados.

const isBookRead:IsBookRead = (books, titleToSearch) => {
  const result = books.find(book => book.title === titleToSearch);
  return result === undefined ? false: true;
}

console.log(`\n----Resultado de ${isBookRead.name}()----`);
console.log("Siendo la lista de libros", ...books);
titles.forEach(bookTitle => {
  console.log(`¿Se ha leído el libro "${bookTitle}"?`, isBookRead(books, bookTitle));
});