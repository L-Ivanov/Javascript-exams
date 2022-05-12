class LibraryCollection{
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor){
        if(this.capacity <= this.books.length){
            throw new Error('Not enough space in the collection.');

        }
        let bookObj = {bookName, bookAuthor, payed:false}
        this.books.push(bookObj);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName){
        if(!this.books.some(x=>x.name ===bookName)){
            throw new Error(`${bookName} is not in the collection.`);
        }
        if(!this.books[bookName]){
            throw new Error(`${bookName} is not in the collection.`);
        }
        if(this.books[bookName].payed=== true){
            throw new Error(`${bookName} has already been paid.`);
        }
        return `${bookName} has been successfully paid.`

    }
    removeBook(bookName){
        if(!this.books.some(x=>x.name ===bookName)){
            throw new Error("The book, you're looking for, is not found.");
        }
        if(!this.books[bookName]){
            throw new Error(`${bookName} is not in the collection.`);
        }
        if(this.books[bookName].payed === false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let indexOfBook = this.books.findIndex(x=>x.name === bookName);
        this.books.splice(indexOfBook,1);
        return `${bookName} remove from the collection.`



    }
    getStatistics(bookAuthor){
        if(bookAuthor === ''){
            let result = [];
            let t = this.capacity-=this.books.length;
            let lineOne = `The book collection has ${t} empty spots left.`;
            result.push(lineOne);
            this.books.sort((a,b)=>a.bookName-b.bookName).forEach(x=> {
                result.push(`${x.bookName} == $${x.bookAuthor} - ${x.payed}.`)
                });
            return result.join('\n');
        }
        let result1 = [];
        this.books[bookAuthor].forEach(x=>{
            result1.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed}.`);
            return result1;
        })
        if(!this.books.some(x=>x.bookAuthor === bookAuthor)){
            throw new Error(`${bookAuthor} is not in the collection.`)
        }

    }



}
const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
//console.log(library.addBook('Ulysses', 'James Joyce'));

library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));
