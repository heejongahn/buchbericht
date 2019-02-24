import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import BookEntity from "../../models/BookEntity";
import BookItem from "../../components/BookItem";

const book: BookEntity = {
  title: "함께 자라기",
  author: "김창준",
  isbn: "9788966262335",
  linkUri:
    "https://m.search.daum.net/search?w=bookpage&bookId=4833808&q=%ED%95%A8%EA%BB%98%20%EC%9E%90%EB%9D%BC%EA%B8%B0",
  imageUri:
    "https://search1.kakaocdn.net/thumb/C216x312.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F4833808%3Fmoddttm=201902032300"
};

export default class Book extends Component<NavigationScreenProps<any>> {
  render() {
    return (
      <View style={styles.container}>
        <BookItem key={book.isbn} book={book} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafc",
    paddingHorizontal: 24,
    paddingVertical: 48
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24
  },
  currentPlatform: {
    fontWeight: "bold"
  }
});
