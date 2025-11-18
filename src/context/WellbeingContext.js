import React, { createContext, useContext, useEffect, useState } from "react";
import { loadCheckins, saveCheckins } from "../utils/storage";

const WellbeingContext = createContext(null);

export const WellbeingProvider = ({ children }) => {
    const [checkins, setCheckins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            try {
                const stored = await loadCheckins();
                if (stored) setCheckins(stored);
            } catch (e) {
                console.log("Erro ao carregar check-ins:", e);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, []);

    useEffect(() => {
        if (!loading) {
            saveCheckins(checkins).catch((e) =>
                console.log("Erro ao salvar check-ins:", e)
            );
        }
    }, [checkins, loading]);

    const addCheckin = (entry) => {
        setCheckins((prev) => [entry, ...prev]);
    };

    const getTodayCheckin = () => {
        const today = new Date().toISOString().slice(0, 10);
        return checkins.find((c) => c.date === today);
    };

    const metrics = React.useMemo(() => {
        if (!checkins.length) {
            return {
                avgMood: null,
                avgEnergy: null,
                avgStress: null
            };
        }

        const total = checkins.length;
        const sumMood = checkins.reduce((acc, c) => acc + c.mood, 0);
        const sumEnergy = checkins.reduce((acc, c) => acc + c.energy, 0);
        const sumStress = checkins.reduce((acc, c) => acc + c.stress, 0);

        return {
            avgMood: (sumMood / total).toFixed(1),
            avgEnergy: (sumEnergy / total).toFixed(1),
            avgStress: (sumStress / total).toFixed(1)
        };
    }, [checkins]);

    return (
        <WellbeingContext.Provider
            value={{ checkins, addCheckin, getTodayCheckin, metrics, loading }}
        >
            {children}
        </WellbeingContext.Provider>
    );
};

export const useWellbeing = () => {
    const ctx = useContext(WellbeingContext);
    if (!ctx) {
        throw new Error("useWellbeing must be used within WellbeingProvider");
    }
    return ctx;
};
