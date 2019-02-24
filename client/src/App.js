import React, { Component } from "react";
import { Grid, Left, Right } from "./components/FlexGrid";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Grid>
          <Left>
            <Navbar />
          </Left>
          <Right>
            <ShoppingList />
          </Right>
        </Grid>
      </Provider>
    );
  }
}

export default App;
