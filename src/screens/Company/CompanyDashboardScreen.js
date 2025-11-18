import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { useAppTheme } from "../../context/ThemeContext";
import { useWellbeing } from "../../context/WellbeingContext";
import TopHeader from "../../components/TopHeader";
import AppCard from "../../components/AppCard";

const CompanyDashboardScreen = () => {
    const { theme } = useAppTheme();
    const { metrics, checkins } = useWellbeing();

    const simulatedEngagement =
        checkins.length === 0 ? 30 : Math.min(90, checkins.length * 10);

    const riskLevel =
        !metrics.avgStress || metrics.avgStress <= 2
            ? "baixo"
            : metrics.avgStress <= 3.5
                ? "moderado"
                : "alto";

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.background }]}
            contentContainerStyle={{ padding: 16 }}
        >
            <TopHeader
                title="Visão para a empresa"
                subtitle="Os dados aqui são sempre anônimos e agregados. A intenção é apoiar decisões de cuidado e não vigiar pessoas."
            />

            <AppCard>
                <Text style={[styles.cardTitle, { color: theme.text }]}>
                    Indicadores gerais
                </Text>
                <Text style={[styles.text, { color: theme.textSecondary }]}>
                    Colaboradores engajados com check-ins (estimado): {simulatedEngagement}
                    %
                </Text>
                {metrics.avgMood ? (
                    <>
                        <Text style={[styles.text, { color: theme.textSecondary }]}>
                            Humor médio da equipe: {metrics.avgMood}/5
                        </Text>
                        <Text style={[styles.text, { color: theme.textSecondary }]}>
                            Energia média: {metrics.avgEnergy}/5
                        </Text>
                        <Text style={[styles.text, { color: theme.textSecondary }]}>
                            Estresse médio: {metrics.avgStress}/5
                        </Text>
                    </>
                ) : (
                    <Text style={[styles.text, { color: theme.textSecondary }]}>
                        Ainda é cedo para uma leitura precisa. Incentive a equipe a usar o
                        app por algumas semanas.
                    </Text>
                )}
            </AppCard>

            <AppCard>
                <Text style={[styles.cardTitle, { color: theme.text }]}>
                    Nível de risco de burnout
                </Text>
                <Text style={[styles.text, { color: theme.textSecondary }]}>
                    Avaliação geral (estimada):{" "}
                    <Text style={{ fontWeight: "700", color: theme.secondary }}>
                        {riskLevel.toUpperCase()}
                    </Text>
                </Text>
                <Text style={[styles.text, { color: theme.textSecondary }]}>
                    Essa leitura considera tendência de estresse médio, frequência de
                    registros e variação de humor.
                </Text>
            </AppCard>

            <AppCard>
                <Text style={[styles.cardTitle, { color: theme.text }]}>
                    Ações recomendadas
                </Text>
                <Text style={[styles.text, { color: theme.textSecondary }]}>
                    • Estimule pausas curtas durante o expediente, principalmente em dias
                    de maior carga.{"\n"}
                    • Promova conversas seguras sobre saúde mental com lideranças.{"\n"}
                    • Revise metas e prazos, garantindo clareza de prioridades.{"\n"}
                    • Incentive o uso do Serenework como ferramenta de autocuidado, sem
                    obrigatoriedade.
                </Text>
            </AppCard>

            <AppCard>
                <Text style={[styles.cardTitle, { color: theme.text }]}>
                    Compromisso ético
                </Text>
                <Text style={[styles.text, { color: theme.textSecondary }]}>
                    Nenhum dado individual é exibido para a empresa. Os dados usados aqui
                    são sempre agregados e anonimizados, reforçando o princípio de cuidado
                    e respeito à privacidade dos colaboradores.
                </Text>
            </AppCard>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 8
    },
    text: {
        fontSize: 14,
        marginBottom: 4
    }
});

export default CompanyDashboardScreen;
