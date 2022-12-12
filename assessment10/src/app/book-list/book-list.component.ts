import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  newTitle: string = '';
  newAuthor: string = '';
  newPublicationYear: number = 0;

  constructor(public BookSrv: BookService) { }

  ngOnInit(): void {
  }

  addBook(){
    this.BookSrv.getBooks().push(
      {
        title: this.newTitle,
        author: this.newAuthor,
        publicationYear: this.newPublicationYear
      }
    );
    this.newTitle = '';
    this.newAuthor = '';
    this.newPublicationYear = 0;
  }

  deleteBook(whichBook: Book){
      for(let index = 0; index < this.BookSrv.getBooks().length; index++){
        if(this.BookSrv.getBooks()[index] == whichBook){
          this.BookSrv.getBooks().splice(index,1);
          return;
        }
      }
  }

}
