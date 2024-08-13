import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import diyaWhite from "@/assets/images/diya_putih.png";
import { StatusBar } from "expo-status-bar";
import ButtonCstm from "@/components/ButtonCstm";
import { useRouter } from "expo-router";

export default function index() {
  const [press, setPress] = useState(false);
  const [press2, setPress2] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView className="w-full h-full bg-mainColor">
      <StatusBar backgroundColor="#08244B" style="light" />
      <View className="flex-1 justify-center gap-28 items-center">
        <View className="">
          <View className="w-56 h-48 ">
            <Image
              resizeMode="contain"
              source={diyaWhite}
              className="w-56 h-48"
            />
          </View>
          <View className=" flex flex-col justify-center items-center">
            <Text className="text-5xl font-bold text-white">divio</Text>
            <Text className="text-sm font-medium text-white">
              diya video mobile
            </Text>
          </View>
        </View>
        <View>
          <View className="flex justify-center items-center">
            <Text className="text-4xl text-white font-bold capitalize">
              masuk
            </Text>
            <Text className="text-white text-xs">Lanjut dengan Mail</Text>
          </View>
          <View className="flex flex-col  justify-center items-center my-2">
            <ButtonCstm
              onPressIn={() => {
                router.push("/register");
                setPress(true);
              }}
              onPressOt={() => setPress(false)}
              press={press}
            >
              <View className="bg-mainColor rounded-full p-2">
                <MaterialIcons
                  className=""
                  name="email"
                  size={24}
                  color="white"
                />
              </View>
              <Text className="text-mainColor   text-lg font-bold pl-10 pr-14">
                Lanjut dengan Mail
              </Text>
            </ButtonCstm>
            <ButtonCstm
              onPressIn={() => {
                setPress2(true), router.push("/(tabs)/home");
              }}
              onPressOt={() => setPress2(false)}
              press={press2}
              bgClassName
            >
              <Text className="text-white capitalize text-sm  px-14">
                Lanjut sebagai tamu
              </Text>
            </ButtonCstm>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
