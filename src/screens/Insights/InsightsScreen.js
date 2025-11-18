import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAppTheme } from "../../context/ThemeContext";
import { useWellbeing } from "../../context/WellbeingContext";
import TopHeader from "../../components/TopHeader";
import AppCard from "../../components/AppCard";

const InsightsScreen = () => {
    const { theme } = useAppTheme();
    const { checkins, metrics } = useWellbeing();

    const last7 = checkins.slice(0, 7);

    const highestStressDay = last7.reduce(
        (acc, c) => (c.stress > (acc?.stress || 0) ? c : acc),
        null
    );

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.background }]}
            contentContainerStyle={{ padding: 16 }}
        >
            <TopHeader
                title="Insights da sua semana"
                subtitle="Esses dados são só seus. Use como bússola para ajustar ritmo, pausas e limites."
            />

            <AppCard>
                <Text style={[styles.cardTitle, { color: theme.text }]}>
                    Resumo geral
                </Text>
                {metrics.avgMood ? (
                    <>
                        <Text style={[styles.text, { color: theme.textSecondary }]}>
                            Humor médio: {metrics.avgMood}/5
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
                        Ainda não há dados suficientes. Use o check-in por alguns dias para
                        ver seus padrões.
                    </Text>
                )}
            </AppCard>

            {last7.length > 0 && (
                <AppCard>
                    <Text style={[styles.cardTitle, { color: theme.text }]}>
                        Últimos dias
                    </Text>
                    {last7.map((c) => (
                        <View key={c.id} style={styles.row}>
                            <Text style={[styles.date, { color: theme.textSecondary }]}>
                                {c.date}
                            </Text>
                            <View style={styles.bars}>
                                <View
                                    style={[
                                        styles.bar,
                                        {
                                            height: c.mood * 10,
                                            backgroundColor: theme.secondary
                                        }
                                    ]}
                                />
                                <View
                                    style={[
                                        styles.bar,
                                        {
                                            height: c.energy * 10,
                                            backgroundColor: theme.primary
                                        }
                                    ]}
                                />
                                <View
                                    style={[
                                        styles.bar,
                                        {
                                            height: c.stress * 10,
                                            backgroundColor: "#E57373"
                                        }
                                    ]}
                                />
                            </View>
                        </View>
                    ))}
                    <Text style={[styles.legend, { color: theme.textSecondary }]}>
                        Verde: humor · Roxo: energia · Vermelho: estresse
                    </Text>
                </AppCard>
            )}

            {highestStressDay && (
                <AppCard>
                    <Text style={[styles.cardTitle, { color: theme.text }]}>
                        Ponto de atenção
                    </Text>
                    <Text style={[styles.text, { color: theme.textSecondary }]}>
                        Seu dia com maior estresse recente foi {highestStressDay.date} (nível{" "}
                        {highestStressDay.stress}/5).
                    </Text>
                    <Text style={[styles.text, { color: theme.textSecondary }]}>
                        Que tal planejar uma pequena pausa ou conversa de alinhamento nesse
                        tipo de dia?
                    </Text>
                </AppCard>
            )}
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
    },
    row: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 8
    },
    date: {
        width: 90,
        fontSize: 12
    },
    bars: {
        flexDirection: "row",
        alignItems: "flex-end",
        flex: 1
    },
    bar: {
        width: 10,
        marginHorizontal: 4,
        borderRadius: 4
    },
    legend: {
        marginTop: 8,
        fontSize: 12
    }
});

export default InsightsScreen;
