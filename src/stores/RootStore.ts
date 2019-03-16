import * as React from "react";
import { observable, action } from "mobx";

import { searchBooks } from "../api";
import BookEntity from "../models/BookEntity";

class RootStore {
  @observable
  books: BookEntity[] = [];

  @action.bound
  async initializeBooks() {
    const booksPromise = await searchBooks({ query: "프로그래밍" });
    const { documents } = await booksPromise.json();
    this.books = documents.map(
      (data: any) =>
        new BookEntity(
          data.isbn,
          data.title,
          data.authors.join(", "),
          data.uri,
          data.thumbnail
        )
    );
  }
}

export const StoreContext = React.createContext(new RootStore());

export default RootStore;
