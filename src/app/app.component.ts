import { Component } from '@angular/core';

interface BookInt{
  title: string | null
  author: string | null
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvoProjFirst';
  books: BookInt[] = [
    {
      title: 'Начало после конца',
      author: 'Брэндон Ли'
    },
    {
      title: 'Война и мир',
      author: 'Лев Толстой'
    },
    {
      title: 'Мастер и Маргарита',
      author: 'Михаил Булгаков'
    }
  ];

  newBook = {
    title: '',
    author: ''
  };

  createBook() {
    this.books.push({
      title: this.newBook.title,
      author: this.newBook.author
    });
  }
}
