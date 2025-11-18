import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { useAppTheme } from "../../context/ThemeContext";
import TopHeader from "../../components/TopHeader";
import AppCard from "../../components/AppCard";

const habits = [
    {
        title: "Pausa de 3 minutos",
        description:
            "Afaste-se da tela, respire profundamente e faça 3 alongamentos simples para pescoço e ombros.",
        time: "3 min"
    },
    {
        title: "Desconexão ao fim do expediente",
        description:
            "Defina um horário para encerrar o trabalho e evite abrir e-mails depois disso.",
        time: "5 min"
    },
    {
        title: "Checagem de limites",
        description:
            "Observe quantas vezes você disse 'sim' hoje quando queria dizer 'não'. Anote para refletir.",
        time: "2 min"
    },
    {
        title: "Respiração 4-4-4",
        description:
            "Inspire por 4 segundos, segure por 4, expire por 4. Repita 5 vezes.",
        time: "2 min"
    }
];

const HabitsScreen = () => {
    const { theme } = useAppTheme();

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.background }]}
            contentContainerStyle={{ padding: 16 }}
        >
            <TopHeader
                title="Micro-hábitos de cuidado"
                subtitle="Pequenas práticas que cabem na sua rotina de trabalho e ajudam a prevenir o burnout."
            />

            {habits.map((h) => (
                <AppCard key={h.title}>
                    <Text style={[styles.habitTitle, { color: theme.text }]}>
                        {h.title}
                    </Text>
                    <Text style={[styles.time, { color: theme.secondary }]}>
                        {h.time}
                    </Text>
                    <Text style={[styles.description, { color: theme.textSecondary }]}>
                        {h.description}
                    </Text>
                </AppCard>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    habitTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 4
    },
    time: {
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 6
    },
    description: {
        fontSize: 14
    }
});

export default HabitsScreen;
