import AsyncStorage from "@react-native-async-storage/async-storage";

const CHECKINS_KEY = "@serenework_checkins";

export async function loadCheckins() {
    const json = await AsyncStorage.getItem(CHECKINS_KEY);
    return json ? JSON.parse(json) : [];
}

export async function saveCheckins(data) {
    await AsyncStorage.setItem(CHECKINS_KEY, JSON.stringify(data));
}
