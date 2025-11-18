import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import MainTabs from "./MainTabs";
import { useAppTheme } from "../context/ThemeContext";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const { theme } = useAppTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: theme.background }
            }}
        >
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
