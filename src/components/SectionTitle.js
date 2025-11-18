import React from "react";
import { Text, StyleSheet } from "react-native";
import { useAppTheme } from "../context/ThemeContext";

const SectionTitle = ({ children }) => {
    const { theme } = useAppTheme();

    return (
        <Text
            accessibilityRole="header"
            style={[styles.title, { color: theme.text }]}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 8
    }
});

export default SectionTitle;
