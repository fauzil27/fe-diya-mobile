import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import useHeaderShown from "@/hooks/useHeaderShown";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/TopBar";
import UserCard from "@/components/UserCard";
import images from "@/constants";
import Message from "@/components/Message";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import VideoCard from "@/components/VideoCard";
export default function Home() {
  useHeaderShown();

  function PremiumMsg() {
    return (
      <View className="flex flex-row justify-between">
        <View>
          <Text className="text-lg text-white">Upgrade To Premium</Text>
          <View className="bg-white border-b-2 w-6 my-2 border-white"></View>
          <Text className="text-white">Secome a VIP Member toget</Text>
          <Text className="text-white">more Features & Unlimited Divio!</Text>
        </View>
        <View className="w-20 h-20">
          <Image
            resizeMode="center"
            className="w-full h-full"
            source={images.premium}
          />
        </View>
      </View>
    );
  }

  const contan = [
    {
      title: "Wonderful",
      user: "patoni",
      views: "6.6",
      date: "10 months ago",
      thumnail: images.thumnail,
    },
    {
      title: "Wonderful",
      user: "patoni",
      views: "6.6",
      date: "10 months ago",
      thumnail: images.thumnail,
    },
    {
      title: "Wonderful",
      user: "patoni",
      views: "6.6",
      date: "10 months ago",
      thumnail: images.thumnail,
    },
    {
      title: "Wonderful",
      user: "patoni",
      views: "6.6",
      date: "10 months ago",
      thumnail: images.thumnail,
    },
    {
      title: "Wonderful",
      user: "patoni",
      views: "6.6",
      date: "10 months ago",
      thumnail: images.thumnail,
    },
    {
      title: "Wonderful",
      user: "patoni",
      views: "6.6",
      date: "10 months ago",
      thumnail: images.thumnail,
    },
    {
      title: "Wonderful",
      user: "patoni",
      views: "6.6",
      date: "10 months ago",
      thumnail: images.thumnail,
    },
    {
      title: "Wonderful",
      user: "patoni",
      views: "6.6",
      date: "10 months ago",
      thumnail: images.thumnail,
    },
  ];
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <ScrollView>
        <View>
          <View>
            <TopBar />
            <UserCard
              welcome="Welcome back,"
              name="Tanjiro Kamado"
              status="Free"
              year={2024}
              image={images.tanjiro}
            />
            <View className="px-3">
              <Message>
                <PremiumMsg />
              </Message>
            </View>
          </View>
          <View>
            <View className="w-full px-2 flex flex-row py-2  items-center justify-between">
              <View className="flex flex-row items-center">
                <MaterialIcons
                  name="local-fire-department"
                  size={24}
                  color="#08244B"
                />
                <Text className="font-medium text-lg">Popular Video</Text>
              </View>
              <View className="w-10 h-10">
                <Image className="w-full h-full" source={images.menu} />
              </View>
            </View>
            <View className="w-full flex flex-row flex-wrap justify-between  pb-28  ">
              {contan.map((e, i) => (
                <View key={i} className="py-1 px-2">
                  <VideoCard
                    title={e.title}
                    user={e.user}
                    views={e.views}
                    date={e.date}
                    thumnail={e.thumnail}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
