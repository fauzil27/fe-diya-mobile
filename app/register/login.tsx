import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input2Cstm from "@/components/Input2Cstm";
import { Link } from "expo-router";
import images from "@/constants/index";

export default function login() {
  const [press, setPress] = useState(false);

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View>
        <Image source={images.tompel} />
      </View>
      <View className="flex flex-col mt-28 justify-center items-center ">
        <View className="w-full px-6">
          <View className="my-2">
            <Input2Cstm title="Email" />
          </View>
          <View className=" my-2">
            <Input2Cstm password title="Password" />
          </View>
          <View className=" my-2">
            <Pressable
              onPressIn={() => setPress(true)}
              onPressOut={() => setPress(false)}
              className={`flex flex-row ${press ? "scale-95" : "scale-100 "} 
                bg-mainColor  w-auto   transition-all  ease-in-out duration-300 justify-center items-center mx-2 py-3 rounded-2xl`}
            >
              <Text className="text-white text-2xl">Login</Text>
            </Pressable>
          </View>
          <View className=" flex-col flex w-full   justify-center items-center">
            <Text>Tidak Punya Akun?</Text>
            <Link className="text-green-300" href="/register">
              Daftar Kesini
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
