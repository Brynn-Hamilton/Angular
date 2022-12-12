import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {
    title: 'book',
    author: 'author',
    publicationYear: 2022
  };

  constructor() { }

  @Output() deleted: EventEmitter<Book> = new EventEmitter<Book>();

  ngOnInit(): void {
  }
  
  doDeleteBook(){
    this.deleted.emit(this.book);
  }

}
