import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputCstm from "@/components/InputCstm";
import { Link } from "expo-router";
import ButtonCstm from "@/components/ButtonCstm";
import images from "@/constants";
import { useForm } from "react-hook-form";
export default function index1() {
  const [press, setPress] = useState(false);
  const direct: string = "/register/login";

  return (
    <SafeAreaView className="w-full h-full">
      <View className=" w-full h-full bg-white">
        <View className="w-full flex flex-row h-60 bg-mainColor rounded-b-lg">
          <View className="pl-10 pt-24">
            <Text className="text-white text-4xl font-bold">Register</Text>
            <Text className="text-white text-4xl font-bold">Akun anda</Text>
            <Text className="text-white text-sm ">
              isi Form ini dengan benar.
            </Text>
          </View>
          <View className="h-full flex flex-row  items-end">
            <Image source={images.tangan} />
          </View>
        </View>
        <View className="w-full h-auto">
          <View className=" h-auto w-full mt-10 px-5">
            <InputCstm placeholder="Nama Lengkap" />
            <InputCstm placeholder="Username" />
            <InputCstm placeholder="Email" />
            <InputCstm placeholder="Password" />
            <View className="w-full flex flex-row justify-end px-4 py-2">
              <Link href={"/"}>Butuh bantuan?</Link>
            </View>
            <View className="flex flex-row justify-center items-center py-8">
              <Pressable
                onPressIn={() => setPress(true)}
                onPressOut={() => setPress(false)}
                className={`flex flex-row ${press ? "scale-95" : "scale-100 "} 
                bg-mainColor my-1 w-40  transition-all  ease-in-out duration-300 justify-center items-center py-3 px-3 rounded-2xl`}
              >
                <Text className="text-white text-2xl">Masuk</Text>
              </Pressable>
            </View>
            <View className="flex flex-row  justify-center items-center">
              <Text>Sudah memiliki akun?</Text>
              <Link className="px-1 text-green-300" href="/register/login">
                Masuk
              </Link>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
