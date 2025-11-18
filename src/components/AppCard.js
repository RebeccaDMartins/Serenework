import React from "react";
import { View, StyleSheet } from "react-native";
import { useAppTheme } from "../context/ThemeContext";

const AppCard = ({ children, style }) => {
    const { theme } = useAppTheme();

    return (
        <View
            style={[
                styles.card,
                {
                    backgroundColor: theme.cardBackground,
                    borderColor: theme.border
                },
                style
            ]}
            accessible
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        padding: 16,
        marginVertical: 8,
        borderWidth: 1
    }
});

export default AppCard;
