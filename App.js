import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation/RootNavigator";
import { ThemeProvider } from "./src/context/ThemeContext";
import { WellbeingProvider } from "./src/context/WellbeingContext";

export default function App() {
    return (
        <ThemeProvider>
            <WellbeingProvider>
                <NavigationContainer>
                    <StatusBar style="auto" />
                    <RootNavigator />
                </NavigationContainer>
            </WellbeingProvider>
        </ThemeProvider>
    );
}
