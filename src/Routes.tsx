import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import { myTheme } from "./theme";

import { Welcome, SignIn, SignUp } from "./modules";
import { Text } from "./components";

const Stack = createNativeStackNavigator();

const headerStyle = (title: string) =>
  ({
    headerTitle: () => (<Text text={title} type="title" />) as React.ReactNode,
    headerStyle: {
      backgroundColor: "#F4FCF8",
    },
    headerShadowVisible: false,
    headerTitleAlign: "center",
    headerTintColor: "#53DC98",
  } as NativeStackNavigationOptions);

export const Routes = () => {
  const { t } = useTranslation("signIn");
  const x = useTranslation("signUp");

  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={({ route, navigation }) => ({ headerShown: false })}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={headerStyle(t("title"))}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={headerStyle(x.t("title"))}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
