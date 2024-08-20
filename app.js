
class Book{

    #title;
    #author;
    #price;
    #stock;
    #id;

    constructor(title, author, price, stock, id){
        this.#title = title;
        this.#author = author;
        this.#price = price;
        this.#stock = stock;
        this.#id = id;


    }

    getInfo(){
        let info = `Book ID: ${this.id} \nTitle: ${this.title} \nAuthor: ${this.author} \nPrice: $${this.price}`;

        if(this.stock > 0){
            info += ` Existencias: ${this.stock}`;
        }else{
            info += ` Agotado`;
        }

        // console.log(info);

        // get title(){
        //     return this.#title;
        // }

        // Set title(new_title){
        //     this.#title = new_title;
        // }
    }
}

class Comic extends Book{

    #ilustrator;
    #vol;

    constructor(title, author, price, stock, id, ilustrator, vol){
        super(title, author, price, stock, id);
        this.#ilustrator = ilustrator;
        this.#vol = vol;
    }

    getInfo(){

        let info = `Ilustrator: ${this.ilustrator} \nVolume: ${this.vol} \n`;
        super.getInfo();
        console.log(info);
        
    }
}


const book1 = new Book('The Alchemist', 'Paulo Coelho', 200, 40, 1);
const book2 = new Book('Clean Code', 'Robert C. Martin', 150, 0, 2);
const comic1 = new Comic('Spiderman', 'Stan Lee', 100, 0, 3, 'Steve Ditko', 1);

console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(comic1);