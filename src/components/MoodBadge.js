import React from "react";
import { View, Text, StyleSheet } from "react-native";

const labels = {
    1: "Exausto",
    2: "Cansado",
    3: "Neutro",
    4: "Bem",
    5: "Muito bem"
};

const MoodBadge = ({ value }) => {
    if (!value) return null;

    const bg =
        value <= 2
            ? "rgba(229,115,115,0.2)"
            : value === 3
                ? "rgba(255,183,77,0.2)"
                : "rgba(129,199,132,0.2)";

    const textColor =
        value <= 2 ? "#E57373" : value === 3 ? "#FFB74D" : "#2E7D32";

    return (
        <View style={[styles.container, { backgroundColor: bg }]}>
            <Text style={[styles.text, { color: textColor }]}>
                Humor: {labels[value]} ({value}/5)
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999
    },
    text: {
        fontSize: 13,
        fontWeight: "600"
    }
});

export default MoodBadge;
