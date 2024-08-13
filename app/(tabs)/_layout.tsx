import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import useHeaderShown from "@/hooks/useHeaderShown";
import TabBar from "@/components/TabBar";

export default function TabLayout() {
  useHeaderShown();
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="shorts" options={{ title: "Shorts" }} />
      <Tabs.Screen name="create" options={{ title: "" }} />
      <Tabs.Screen name="subscription" options={{ title: "Subscriptions" }} />
      <Tabs.Screen name="library" options={{ title: "Library" }} />
    </Tabs>
  );
}
