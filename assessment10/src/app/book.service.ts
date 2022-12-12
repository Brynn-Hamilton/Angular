import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  Books: Book[] = [
    {title: "Assassin's Apprentice", author: 'Robin Hobb', publicationYear: 1995},
    {title: 'Royal Assassin', author: 'Robin Hobb', publicationYear: 1996},
    {title: "Assassin's Quest", author: 'Robin Hobb', publicationYear: 1997}
  ]

  getBooks(): Book[]{
    return this.Books;
  }
  constructor() { }
}
