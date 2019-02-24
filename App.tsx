import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "mobx-react";

import BookScreen from "./src/views/Book";
import HomeScreen from "./src/views/Home";
import { store } from "./src/stores/RootStore";

store.initializeBooks();

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Book: { screen: BookScreen }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
