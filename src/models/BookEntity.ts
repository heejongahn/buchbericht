export default class BookEntity {
  constructor(
    public isbn: string,
    public title: string,
    public author: string,
    public linkUri: string,
    public imageUri: string
  ) {}
}
