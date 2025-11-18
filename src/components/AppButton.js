import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useAppTheme } from "../context/ThemeContext";

const AppButton = ({
    title,
    onPress,
    variant = "primary",
    accessibilityLabel
}) => {
    const { theme } = useAppTheme();

    const backgroundColor =
        variant === "secondary" ? theme.secondary : theme.primary;

    return (
        <TouchableOpacity
            accessible
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel || title}
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <Text style={[styles.text, { color: "#FFF" }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 6,
        minWidth: 160
    },
    text: {
        fontSize: 16,
        fontWeight: "600"
    }
});

export default AppButton;
