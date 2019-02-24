import React from "react";
import { Component } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import { observer, inject } from "mobx-react";
import { NavigationScreenProps } from "react-navigation";

import BookItem from "../../components/BookItem";
import RootStore from "../../stores/RootStore";

const currentPlatform = Platform.select({
  ios: "iOS",
  android: "Android"
});

interface Props extends NavigationScreenProps<{}> {
  store?: RootStore;
}

@inject("store")
@observer
export default class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Buchbericht, running on
          <Text style={styles.currentPlatform}>{currentPlatform}</Text>
        </Text>
        {this.props.store!.books.map(book => (
          <BookItem
            key={book.isbn}
            book={book}
            onClick={() =>
              this.props.navigation.navigate("Book", { isbn: book.isbn })
            }
          />
        ))}
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
