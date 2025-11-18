import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useAppTheme } from "../../context/ThemeContext";
import TopHeader from "../../components/TopHeader";
import AppCard from "../../components/AppCard";

const ProfileScreen = () => {
    const { theme, mode, toggleTheme } = useAppTheme();

    return (
        <View
            style={[styles.container, { backgroundColor: theme.background }]}
        >
            <View style={{ padding: 16, flex: 1 }}>
                <TopHeader
                    title="Seu espaço"
                    subtitle="Ajuste preferências do Serenework do jeito que funciona melhor para você."
                />

                <AppCard>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>
                        Preferências de aparência
                    </Text>
                    <View style={styles.row}>
                        <Text style={{ color: theme.textSecondary, fontSize: 14 }}>
                            Modo escuro
                        </Text>
                        <Switch
                            value={mode === "dark"}
                            onValueChange={toggleTheme}
                            thumbColor={theme.primary}
                        />
                    </View>
                    <Text style={{ color: theme.textSecondary, fontSize: 12 }}>
                        Troque entre modo claro e escuro pensando no seu conforto visual
                        durante o trabalho.
                    </Text>
                </AppCard>

                <AppCard>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>
                        Sobre o Serenework
                    </Text>
                    <Text style={{ color: theme.textSecondary, fontSize: 14 }}>
                        O Serenework é um projeto acadêmico focado em prevenir burnout e
                        apoiar o equilíbrio entre produtividade e bem-estar emocional no
                        futuro do trabalho.
                    </Text>
                </AppCard>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    sectionTitle: {
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 8
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6
    }
});

export default ProfileScreen;
