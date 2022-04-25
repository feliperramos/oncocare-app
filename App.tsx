import React, { Suspense } from "react";
import { ActivityIndicator, StatusBar } from "react-native";

import { Routes } from "./src/Routes";

import "./src/locales";

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Suspense fallback={<ActivityIndicator />}>
        <Routes />
      </Suspense>
    </>
  );
};

export default App;
