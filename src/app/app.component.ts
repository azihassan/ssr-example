import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csr-example';
  todos: Todo[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.todos = [];
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').subscribe(
      (success) => {
        this.todos = success;
      },
      (error) => {
        console.log("Failed to load todos : ", error);
      }
    );
  }
}

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
