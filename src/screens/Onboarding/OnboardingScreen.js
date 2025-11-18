import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import AppButton from "../../components/AppButton";
import { useAppTheme } from "../../context/ThemeContext";

const { width } = Dimensions.get("window");

const steps = [
    {
        title: "Bem-vindo ao Serenework",
        text: "Equilibre produtividade e bem-estar emocional no seu dia a dia de trabalho."
    },
    {
        title: "Check-ins rápidos",
        text: "Registre humor, energia e nível de estresse em segundos, para se conhecer melhor."
    },
    {
        title: "Insights e Modo Empresa",
        text: "Receba insights e permita que a empresa enxergue tendências anônimas para criar ações de cuidado."
    }
];

const OnboardingScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const { theme } = useAppTheme();

    const current = steps[index];

    const handleNext = () => {
        if (index < steps.length - 1) {
            setIndex((prev) => prev + 1);
        } else {
            navigation.replace("MainTabs");
        }
    };

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: theme.background, paddingHorizontal: 24 }
            ]}
        >
            <View style={styles.logoContainer} accessible>
                <View
                    style={[
                        styles.logoCircle,
                        { backgroundColor: theme.primary, shadowColor: theme.primary }
                    ]}
                >
                    <Text style={styles.logoText}>SW</Text>
                </View>
                <Text style={[styles.appName, { color: theme.text }]}>Serenework</Text>
                <Text style={[styles.tagline, { color: theme.textSecondary }]}>
                    Bem-estar emocional no futuro do trabalho.
                </Text>
            </View>

            <View
                style={[
                    styles.card,
                    { backgroundColor: theme.cardBackground, borderColor: theme.border }
                ]}
            >
                <Text
                    style={[styles.title, { color: theme.text }]}
                    accessibilityRole="header"
                >
                    {current.title}
                </Text>
                <Text style={[styles.text, { color: theme.textSecondary }]}>
                    {current.text}
                </Text>

                <View style={styles.dots} accessible accessibilityRole="progressbar">
                    {steps.map((_, i) => (
                        <View
                            key={i}
                            style={[
                                styles.dot,
                                {
                                    backgroundColor:
                                        i === index ? theme.primary : theme.border,
                                    width: i === index ? 26 : 8
                                }
                            ]}
                        />
                    ))}
                </View>

                <AppButton
                    title={index === steps.length - 1 ? "Começar" : "Continuar"}
                    onPress={handleNext}
                    accessibilityLabel="Ir para a próxima etapa do onboarding"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 40
    },
    logoCircle: {
        width: 84,
        height: 84,
        borderRadius: 42,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.35,
        shadowRadius: 16,
        elevation: 4
    },
    logoText: {
        color: "#FFF",
        fontWeight: "800",
        fontSize: 26
    },
    appName: {
        fontSize: 24,
        fontWeight: "700"
    },
    tagline: {
        marginTop: 4,
        fontSize: 14,
        textAlign: "center"
    },
    card: {
        width: width - 48,
        borderRadius: 24,
        padding: 20,
        alignSelf: "center",
        borderWidth: 1
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 10
    },
    text: {
        fontSize: 15,
        marginBottom: 24
    },
    dots: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
    },
    dot: {
        height: 8,
        borderRadius: 999,
        marginRight: 6
    }
});

export default OnboardingScreen;
