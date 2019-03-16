import React, { useContext } from "react";
import { Observer } from "mobx-react-lite";
import { Platform, StyleSheet, View, Text } from "react-native";
import { NavigationScreenProps } from "react-navigation";

import BookItem from "../../components/BookItem";
import { StoreContext } from "../../stores/RootStore";

const currentPlatform = Platform.select({
  ios: "iOS",
  android: "Android"
});

interface Props extends NavigationScreenProps<{}> {}

const Home: React.FC<Props> = ({ navigation }) => {
  const store = useContext(StoreContext);

  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <Text style={styles.title}>
            Buchbericht, running on
            <Text style={styles.currentPlatform}>{currentPlatform}</Text>
          </Text>
          {store!.books.map(book => (
            <BookItem
              key={book.isbn}
              book={book}
              onClick={() => navigation.navigate("Book", { isbn: book.isbn })}
            />
          ))}
        </View>
      )}
    </Observer>
  );
};

export default Home;

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
