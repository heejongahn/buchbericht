import { observable, action } from "mobx";

import BookEntity from "../models/BookEntity";

const books: BookEntity[] = [
  {
    title: "함께 자라기",
    author: "김창준",
    isbn: "9788966262335",
    linkUri:
      "https://m.search.daum.net/search?w=bookpage&bookId=4833808&q=%ED%95%A8%EA%BB%98%20%EC%9E%90%EB%9D%BC%EA%B8%B0",
    imageUri:
      "https://search1.kakaocdn.net/thumb/C216x312.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F4833808%3Fmoddttm=201902032300"
  },
  {
    title: "플라이룸",
    author: "김우재",
    isbn: "9788934984368",
    linkUri:
      "https://m.search.daum.net/search?w=bookpage&bookId=4836833&tab=introduction&DA=LB0&q=%ED%94%8C%EB%9D%BC%EC%9D%B4%EB%A3%B8",
    imageUri:
      "https://search1.kakaocdn.net/thumb/C216x312.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F4836833%3Fmoddttm=201902032302"
  }
];

class RootStore {
  @observable
  books: BookEntity[] = [];

  @action.bound
  initializeBooks() {
    this.books = books;
  }
}

export default RootStore;

export const store = new RootStore();
