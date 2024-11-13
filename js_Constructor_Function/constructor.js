class Books {
    constructor(title, author, genre, year){
        this.title = title
        this.author = author
        this.genre = genre
        this.year = year
        console.log ("books")
    }

    getSummary(){
        console.log (`Title: ${this.title} , Author: ${this.author} , Genre: ${this.genre} , Year: ${this.year}`)
    }
}

let obj1 = new Books("Harry Potter and the Sorcerer's Stone", "J.K. Rowling","Fantasy","1997")
let obj2 = new Books("Harry Potter and the Chamber of Secrets", "J.K. Rowling", "Fantasy","1998")
let obj3 = new Books("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling","Fantasy","1999")
let obj4 = new Books("Harry Potter and the Goblet of Fire", "J.K. Rowling","Fantasy","2000")
let obj5 = new Books("Harry Potter and the Order of the Pheonix", "J.K. Rowling","Fantasy","2003")
let obj6 = new Books("Harry Potter and the Half-Blood Prince", "J.K. Rowling","Fantasy","2005")
let obj7 = new Books("Harry Potter and the Deathly Hallows", "J.K. Rowling","Fantasy","2007")
obj1.getSummary()
obj2.getSummary()
obj3.getSummary()
obj4.getSummary()
obj5.getSummary()
obj6.getSummary()
obj7.getSummary()
