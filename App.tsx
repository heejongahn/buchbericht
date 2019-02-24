import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BookScreen from "./views/Book";
import HomeScreen from "./views/Home";
import { Provider } from "mobx-react";
import { store } from "./stores/RootStore";

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
