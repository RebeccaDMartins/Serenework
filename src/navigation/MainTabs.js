import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import HomeScreen from "../screens/Home/HomeScreen";
import CheckInScreen from "../screens/CheckIn/CheckInScreen";
import HabitsScreen from "../screens/Habits/HabitsScreen";
import InsightsScreen from "../screens/Insights/InsightsScreen";
import CompanyDashboardScreen from "../screens/Company/CompanyDashboardScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { useAppTheme } from "../context/ThemeContext";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    const { theme } = useAppTheme();

    const screenOptions = {
        headerShown: false,
        tabBarStyle: {
            backgroundColor: theme.tabBar,
            borderTopColor: theme.border,
            height: 64
        },
        tabBarActiveTintColor: theme.tabBarActive,
        tabBarInactiveTintColor: theme.tabBarInactive,
        tabBarLabelStyle: {
            fontSize: 11
        }
    };

    const makeLabel = (label) => ({ color }) => (
        <Text style={{ color, fontSize: 11 }}>{label}</Text>
    );

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: makeLabel("Início")
                }}
            />
            <Tab.Screen
                name="CheckIn"
                component={CheckInScreen}
                options={{
                    tabBarLabel: makeLabel("Check-in")
                }}
            />
            <Tab.Screen
                name="Habits"
                component={HabitsScreen}
                options={{
                    tabBarLabel: makeLabel("Hábitos")
                }}
            />
            <Tab.Screen
                name="Insights"
                component={InsightsScreen}
                options={{
                    tabBarLabel: makeLabel("Insights")
                }}
            />
            <Tab.Screen
                name="Company"
                component={CompanyDashboardScreen}
                options={{
                    tabBarLabel: makeLabel("Empresa")
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: makeLabel("Perfil")
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabs;
