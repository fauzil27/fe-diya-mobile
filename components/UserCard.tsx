import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
export default function UserCard({
  welcome,
  name,
  status,
  year,
  image,
}: {
  status?: string;
  welcome?: string;
  name?: string;
  year?: number;
  image?: ImageSourcePropType | undefined;
}) {
  return (
    <View className="w-full px-3 flex flex-row justify-between items-center">
      <View>
        <Text className="text-lg ">{welcome}</Text>
        <Text className="text-3xl capitalize">{name}!</Text>
        <View className="flex flex-row gap-2 py-1">
          <View className="flex flex-row">
            <Entypo className="" name="dot-single" size={24} color="gray" />
            <Text>{status} User</Text>
          </View>
          <View className="flex flex-row">
            <Entypo name="dot-single" size={24} color="#f59536" />
            <Text>Since {year}</Text>
          </View>
        </View>
      </View>
      <View className="w-20 h-20  rounded-full  bg-slate-300">
        <Image
          resizeMode="cover"
          source={image}
          className="w-full h-full rounded-full"
        />
      </View>
    </View>
  );
}
