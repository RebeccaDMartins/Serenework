import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { useAppTheme } from "../../context/ThemeContext";
import { useWellbeing } from "../../context/WellbeingContext";
import TopHeader from "../../components/TopHeader";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import MoodBadge from "../../components/MoodBadge";

const HomeScreen = ({ navigation }) => {
    const { theme } = useAppTheme();
    const { metrics, getTodayCheckin } = useWellbeing();

    const today = getTodayCheckin();

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.background }]}
            contentContainerStyle={{ padding: 16 }}
        >
            <TopHeader
                title="Como você está hoje?"
                subtitle="Use o Serenework como seu espaço de pausa intencional durante o trabalho."
            />

            <AppCard>
                <Text style={[styles.label, { color: theme.textSecondary }]}>
                    Check-in de hoje
                </Text>
                {today ? (
                    <>
                        <MoodBadge value={today.mood} />
                        <Text style={[styles.text, { color: theme.textSecondary }]}>
                            Energia: {today.energy}/5 · Estresse: {today.stress}/5
                        </Text>
                    </>
                ) : (
                    <Text style={[styles.text, { color: theme.textSecondary }]}>
                        Você ainda não registrou como está hoje.
                    </Text>
                )}
                <AppButton
                    title={today ? "Atualizar check-in" : "Fazer check-in"}
                    onPress={() => navigation.navigate("CheckIn")}
                    accessibilityLabel="Ir para tela de check-in de bem-estar"
                />
            </AppCard>

            <AppCard>
                <Text style={[styles.label, { color: theme.textSecondary }]}>
                    Tendência geral
                </Text>
                {metrics.avgMood ? (
                    <>
                        <Text style={[styles.metric, { color: theme.text }]}>
                            Humor médio: {metrics.avgMood}/5
                        </Text>
                        <Text style={[styles.metric, { color: theme.text }]}>
                            Energia média: {metrics.avgEnergy}/5
                        </Text>
                        <Text style={[styles.metric, { color: theme.text }]}>
                            Estresse médio: {metrics.avgStress}/5
                        </Text>
                    </>
                ) : (
                    <Text style={[styles.text, { color: theme.textSecondary }]}>
                        Comece registrando alguns dias para ver um resumo da sua jornada.
                    </Text>
                )}
                <AppButton
                    title="Ver insights"
                    variant="secondary"
                    onPress={() => navigation.navigate("Insights")}
                />
            </AppCard>

            <AppCard>
                <Text style={[styles.label, { color: theme.textSecondary }]}>
                    Sugestões rápidas
                </Text>
                <Text style={[styles.text, { color: theme.textSecondary }]}>
                    • Separe 3 minutos entre tarefas para respirar fundo e alongar os
                    ombros.{"\n"}
                    • Defina um horário para encerrar o trabalho e se desconectar dos
                    e-mails.{"\n"}
                    • Use o check-in diariamente por 1 semana para perceber padrões.
                </Text>
            </AppCard>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 8
    },
    text: {
        fontSize: 14,
        marginBottom: 12
    },
    metric: {
        fontSize: 15,
        marginBottom: 4
    }
});

export default HomeScreen;
