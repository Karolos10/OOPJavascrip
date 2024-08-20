
class Book{

    constructor(title, author, price, stock, id){
        this.title = title;
        this.author = author;
        this.price = price;
        this.stock = stock;
        this.id = id;


    }

    getInfo(){
        let info = `Book ID: ${this.id} \nTitle: ${this.title} \nAuthor: ${this.author} \nPrice: $${this.price}`;

        if(this.stock > 0){
            info += ` Existencias: ${this.stock}`;
        }else{
            info += ` Agotado`;
        }

        console.log(info);
    }
}


const book1 = new Book('The Alchemist', 'Paulo Coelho', 200, 40, 1);
const book2 = new Book('Clean Code', 'Robert C. Martin', 150, 0, 2);

console.log(book1.getInfo());
console.log(book2.getInfo());