import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";

export default function Message({ children }: { children?: ReactNode }) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View className="bg-mainColor w-full h-auto rounded-xl p-3">
        {children}
      </View>
    </TouchableOpacity>
  );
}
