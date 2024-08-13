import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function VideoCard({
  title,
  user,
  views,
  date,
  thumnail,
}: {
  title?: string;
  user?: string;
  views?: string;
  date?: string;
  thumnail?: ImageSourcePropType | undefined;
}) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View className="w-[180px] bg-white shadow-md shadow-black rounded-xl ">
        <View>
          <View className="w-full h-28  rounded-xl">
            <Image
              resizeMode="stretch"
              source={thumnail}
              className="w-full h-full rounded-xl"
            />
            <View className="absolute bottom-2 left-1">
              <AntDesign name="play" size={24} color="#08244B" />
            </View>
          </View>
          <View className="flex w-full flex-row py-2 ">
            <Image
              source={images.tanjiro}
              className="w-8 h-8 rounded-full ml-1"
            />
            <View className="px-1 w-36">
              <Text className="">{title}</Text>
              <View className="flex flex-row w-full">
                <Text className="border-r pr-0.5 text-[9px]">{user}</Text>
                <Text className="border-r px-0.5 text-[9px]">
                  {views} views
                </Text>
                <Text className="pl-0.5 text-[9px]">{date}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
