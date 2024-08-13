import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
export default function Search() {
  return (
    <TouchableOpacity>
      <View className="bg-white w-44 rounded-full p-3 border border-stone-400">
        <View className="absolute left-2 top-2 p-1 bg-mainColor rounded-full">
          <Feather name="search" size={18} color="white" />
        </View>
        <Text className="w-full pl-8 text-stone-400 ">Search here</Text>
      </View>
    </TouchableOpacity>
  );
}
