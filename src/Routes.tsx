import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./Home";
import { LanguageProvider } from "./locales";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
};
