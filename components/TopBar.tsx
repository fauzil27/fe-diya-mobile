import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants";
import Search from "./Search";

export default function TopBar() {
  return (
    <View className="w-full px-3 py-4 flex flex-row items-center justify-between">
      <View className="flex flex-row gap-1 px-2">
        <Image
          resizeMode="contain"
          source={images.diyaBiru}
          className="w-12  h-12"
        />
        <Text className="text-xl pt-0.5 text-mainColor">divio</Text>
      </View>
      <View>
        <Search />
      </View>
    </View>
  );
}
