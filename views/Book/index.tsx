import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";
import { observer, inject } from "mobx-react";
import { NavigationScreenProps } from "react-navigation";

import BookItem from "../../components/BookItem";
import RootStore from "../../stores/RootStore";

interface Props extends NavigationScreenProps<{ isbn: string }> {
  store?: RootStore;
}

@inject("store")
@observer
export default class Book extends Component<Props> {
  render() {
    const { store, navigation } = this.props;
    const book = store!.books.find(
      book => book.isbn === navigation.getParam("isbn")
    );

    if (!book) {
      return null;
    }

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
