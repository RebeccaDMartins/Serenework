import { colors } from "./colors";

export const lightTheme = {
    mode: "light",
    background: colors.white,
    surface: "#F7F5FF",
    text: colors.black,
    textSecondary: "#555555",
    primary: colors.primary,
    secondary: colors.secondary,
    border: "#E0E0E0",
    cardBackground: "#FFFFFF",
    tabBar: "#FFFFFF",
    tabBarInactive: "#999999",
    tabBarActive: colors.primary
};

export const darkTheme = {
    mode: "dark",
    background: "#050509",
    surface: "#151024",
    text: colors.white,
    textSecondary: "#CCCCCC",
    primary: colors.primary,
    secondary: colors.secondary,
    border: "#333333",
    cardBackground: "#1F1633",
    tabBar: "#100B1D",
    tabBarInactive: "#888888",
    tabBarActive: colors.secondary
};
