import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from "react-native";
import { useAppTheme } from "../../context/ThemeContext";
import { useWellbeing } from "../../context/WellbeingContext";
import TopHeader from "../../components/TopHeader";
import AppButton from "../../components/AppButton";
import AppCard from "../../components/AppCard";

const scaleOptions = [1, 2, 3, 4, 5];

const CheckInScreen = () => {
    const { theme } = useAppTheme();
    const { addCheckin } = useWellbeing();

    const [mood, setMood] = useState(null);
    const [energy, setEnergy] = useState(null);
    const [stress, setStress] = useState(null);

    const handleSave = () => {
        if (!mood || !energy || !stress) {
            Alert.alert(
                "Campos incompletos",
                "Preencha humor, energia e estresse para registrar seu check-in."
            );
            return;
        }

        const entry = {
            id: Date.now().toString(),
            date: new Date().toISOString().slice(0, 10),
            mood,
            energy,
            stress
        };

        addCheckin(entry);
        Alert.alert("Check-in registrado", "Obrigado por cuidar de você hoje.");
    };

    const renderScale = (label, value, setValue) => (
        <View
            accessible
            accessibilityRole="radiogroup"
            style={{ marginBottom: 16 }}
        >
            <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
            <View style={styles.row}>
                {scaleOptions.map((opt) => {
                    const selected = value === opt;
                    return (
                        <TouchableOpacity
                            key={opt}
                            accessible
                            accessibilityRole="radio"
                            accessibilityState={{ selected }}
                            accessibilityLabel={`${label} nível ${opt}`}
                            style={[
                                styles.option,
                                {
                                    borderColor: selected ? theme.primary : theme.border,
                                    backgroundColor: selected
                                        ? theme.primary
                                        : theme.cardBackground
                                }
                            ]}
                            onPress={() => setValue(opt)}
                        >
                            <Text
                                style={{
                                    color: selected ? "#FFF" : theme.text
                                }}
                            >
                                {opt}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.background }]}
            contentContainerStyle={{ padding: 16 }}
        >
            <TopHeader
                title="Check-in de bem-estar"
                subtitle="Leva menos de 30 segundos e ajuda a acompanhar seu equilíbrio ao longo da semana."
            />

            <AppCard>
                {renderScale("Como está seu humor agora?", mood, setMood)}
                {renderScale("Seu nível de energia?", energy, setEnergy)}
                {renderScale("Nível de estresse no trabalho?", stress, setStress)}

                <AppButton
                    title="Registrar check-in"
                    onPress={handleSave}
                    accessibilityLabel="Salvar check-in de bem-estar"
                />
            </AppCard>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 8
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    option: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 4,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: "center"
    }
});

export default CheckInScreen;
