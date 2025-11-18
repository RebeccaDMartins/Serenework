import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppTheme } from "../context/ThemeContext";

const TopHeader = ({ title, subtitle }) => {
    const { theme } = useAppTheme();

    return (
        <View style={styles.container} accessible>
            <Text
                style={[styles.title, { color: theme.text }]}
                accessibilityRole="header"
            >
                {title}
            </Text>
            {subtitle ? (
                <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
                    {subtitle}
                </Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    title: {
        fontSize: 24,
        fontWeight: "700"
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14
    }
});

export default TopHeader;
