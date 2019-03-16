import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

import BookItem from "../../components/BookItem";
import { StoreContext } from "../../stores/RootStore";
import { Observer } from "mobx-react-lite";

interface Props extends NavigationScreenProps<{ isbn: string }> {}

const Book: React.FC<Props> = ({ navigation }) => {
  const store = useContext(StoreContext);
  const book = store!.books.find(
    book => book.isbn === navigation.getParam("isbn")
  );

  if (!book) {
    return null;
  }

  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <BookItem key={book.isbn} book={book} />
        </View>
      )}
    </Observer>
  );
};

export default Book;

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
