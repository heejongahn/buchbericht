import React, { useEffect } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BookScreen from "./src/views/Book";
import HomeScreen from "./src/views/Home";
import RootStore, { StoreContext } from "./src/stores/RootStore";

declare var global: any;
global._fetch = global.fetch;
global.fetch = function(uri: string, options: {}, ...args: any[]) {
  return global._fetch(uri, options, ...args).then((response: any) => {
    console.log("Fetch", { request: { uri, options, ...args }, response });
    return response;
  });
};

const store = new RootStore();

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Book: { screen: BookScreen }
});

const AppContainer = createAppContainer(MainNavigator);

const App: React.FC = () => {
  useEffect(() => {
    store.initializeBooks();
  }, []);

  return (
    <StoreContext.Provider value={store}>
      <AppContainer />
    </StoreContext.Provider>
  );
};

export default App;
