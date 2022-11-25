export default class Todo {
  id: string;
  title: string;
  text?: string;

  constructor(todoTitle: string, todoText?: string) {
    this.text = todoText;
    this.title = todoTitle;
    this.id = new Date().toISOString() + Math.ceil(Math.random() * 100000);
  }
}
