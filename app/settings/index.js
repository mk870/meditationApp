import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLORS, SIZES, SHADOWS } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";

const SettingsMenu = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userDetails");
    router.replace("/login");
  };

  const MenuItem = ({
    icon,
    title,
    onPress,
    danger = false,
  }) => (
    <TouchableOpacity
      style={[
        styles.menuItem,
        {
          backgroundColor: danger
            ? "#F5C5D0"
            : isDarkMode
            ? "#1E1E1E"
            : COLORS.lightWhite,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <Text
        style={[
          styles.menuText,
          {
            color: isDarkMode
              ? COLORS.lightWhite
              : COLORS.primary,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? COLORS.darkBackground
            : "#F8F8F8",
        },
      ]}
    >
      <Text
        style={[
          styles.greeting,
          {
            color: isDarkMode
              ? COLORS.lightWhite
              : COLORS.primary,
          },
        ]}
      >
        Hello ric!
      </Text>

      <Text
        style={[
          styles.heading,
          {
            color: isDarkMode
              ? COLORS.lightWhite
              : COLORS.primary,
          },
        ]}
      >
        Would you like to change any settings?
      </Text>

      <MenuItem
        icon="⚙️"
        title="Settings"
        onPress={() =>
          router.push("/settings/ThemeChange")
        }
      />

      <MenuItem
        icon="❤️"
        title="My Favourites"
        onPress={() =>
          router.push("/settings/Favourites")
        }
      />

      <MenuItem
        icon="🕒"
        title="Daily Reminders"
        onPress={() =>
          router.push("/settings/DailyReminders")
        }
      />

      <MenuItem
        icon="←"
        title="Logout"
        danger
        onPress={handleLogout}
      />
    </SafeAreaView>
  );
};

export default SettingsMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
  },

  greeting: {
    fontSize: 18,
    marginTop: 20,
  },

  heading: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    ...SHADOWS.small,
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  icon: {
    fontSize: 26,
  },

  menuText: {
    fontSize: 20,
    fontWeight: "600",
  },
});