import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

import BookEntity from "../../models/BookEntity";

interface Props {
  book: BookEntity;
  onClick?: () => void;
}

export default function BookItem({ book, onClick }: Props) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>by {book.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 4
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16
  },
  author: {
    fontSize: 14,
    marginBottom: 12
  }
});
