// Step 1: Create the Base Class
class LibraryItem{
    constructor(title, id){
     this.title = title;
     this.id = id;
     this.isAvaliable = true;
    }
   checkOut(){
      if(this.isAvaliable){
        console.log(`Sucess: Title: ${this.title} (ID: ${this.id}) has been checked out`);
        this.isAvaliable = false;
      }
      else{
        console.log(`Error: Title: ${this.title} is already checked out`);
      }
   }
   returnItem(){
     return `${this.title} has been returned and ${this.title} is now available`;
   }
   displayInfo(){
    const status = this.isAvaliable ? "Avaliable" : "Checked Out";
    return `ID: ${this.id} | Title: ${this.title} | Status: ${status}`;
   }
}
// Step 2: Extend the Base Class
class Book extends LibraryItem{
    constructor(title,id,author,genre){
        super(title,id);
        this.author = author;
        this.genre = genre;
    }
    displayInfo(){
        const status = this.isAvaliable?"Avaliable":"Checked Out";
        return `[Book] ID: ${this.id} | Title: '${this.title}' | Author: ${this.author} | Genre: ${this.genre} | Status: ${status}`; 
   }

}
class DVD extends LibraryItem{
    constructor(title,id,director,duration){
        super(title,id);
        this.director = director;
        this.duration = duration;
    }
    displayInfo(){
        const status = this.isAvaliable?"Avaliable":"Checked Out";
        return `[DVD] ID: ${this.id} | Title: '${this.title}' | Director: ${this.director} | Duration: ${this.duration} mins | Status: ${status}`;
    }
}
class Magazine extends LibraryItem{
    constructor(title,id,issuseNumber,publisher){
        super(title,id);
        this.issuseNumber = issuseNumber;
        this.publisher = publisher;
    }
    displayInfo(){
        const status = this.isAvaliable ? "Avaliable" : "Checked Out"
        console.log(`[Magazine] ID: ${this.id} | Title: '${this.title}' | Issue: #${this.issueNumber} | Publisher: ${this.publisher} | Status: ${status}`);
    }
}
// ==========================================
// Step 3 & Step 4: Instantiation & Testing
// ==========================================
console.log("--- 1. Creating Instances ---");
const book = new Book("The Hobbit", "B101", "J.R.R. Tolkien", "Fantasy");
const myDvd = new DVD("Inception", "D201", "Christopher Nolan", 148);
const myMag = new Magazine("National Geographic", "M301", 452, "Partners");

console.log("\n--- 2. Displaying Unique Properties & Initial Status ---");
console.log(book.displayInfo());
console.log(myDvd.displayInfo());
myMag.displayInfo();

console.log("\n--- 3. Testing Checkout and Return Functionality ---");
// Check out the book
book.checkOut();
// Try checking out the same book again
book.checkOut();

console.log("\n--- 4. Status After Checkout ---");
console.log(book.displayInfo());

console.log("\n--- 5. Returning the Book ---");
console.log(book.returnItem());
console.log(book.displayInfo());



