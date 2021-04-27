import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import store from "./src/redux/store";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipesListScreen from "./src/components/RecipesEpic/RecipesListScreen";
import RecipesDetailsScreen from "./src/components/RecipesEpic/RecipeDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={RecipesListScreen} />
          <Stack.Screen name="Details" component={RecipesDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
