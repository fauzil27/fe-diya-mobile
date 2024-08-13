import { View, Text, Animated, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function Input2Cstm({
  title,
  password,
}: {
  title: string;
  password?: boolean;
}) {
  const [text, setText] = useState("");
  const [hidden, setHidden] = useState(true);
  const [click, setClick] = useState(false);

  //   console.log(text);
  return (
    <View>
      <Pressable
        onPressIn={() => setClick(true)}
        className={`w-auto  h-12 m-2 px-2 bg-white  rounded-xl ${
          click ? " border-indigo-950" : "border-black"
        } border-2`}
      >
        <Animated.Text className="absolute -top-4 left-4 px-2 text-lg bg-white rounded-lg  transition-all ease-in-out duration-300">
          {title}
        </Animated.Text>
        {password ? (
          <View className="px-2 pr-7 pt-2 w-full flex flex-row  ">
            <TextInput
              value={text}
              secureTextEntry={hidden}
              onChangeText={(e) => setText(e)}
              className="w-full text-lg "
            />
            <Pressable
              onPressIn={() => setHidden(!hidden)}
              className="mx-1 mt-1 "
            >
              {hidden ? (
                <Fontisto name="unlocked" size={24} color="#08244B" />
              ) : (
                <Fontisto name="locked" size={24} color="#08244B" />
              )}
            </Pressable>
          </View>
        ) : (
          <View className="px-2 pt-2 w-full flex flex-row ">
            <TextInput className="w-full text-lg" />
          </View>
        )}
      </Pressable>
    </View>
  );
}
