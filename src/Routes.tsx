import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { myTheme } from "./theme";

import { Welcome } from "./Welcome";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
