import { View, Text, Animated, TextInput } from "react-native";
import React, { useState } from "react";

export default function InputCstm({
  placeholder,
}: {
  placeholder: string;
  focus?: boolean;
}) {
  const [focus, setfocus] = useState(false);
  const [text, setText] = useState("");

  return (
    <View>
      <View
        className={`w-auto h-12 m-2 bg-stone-200 ${
          focus ? "border-2 border-[#08244B]" : ""
        }  rounded-xl`}
      >
        {focus && text !== "" ? null : (
          <Text className="absolute text-lg top-2 left-2 text-stone-400">
            {placeholder}
          </Text>
        )}
        <View onPointerDown={() => setfocus(true)} className="px-2 py-2 w-full">
          <TextInput
            className="text-lg w-full"
            onPressIn={() => setfocus(true)}
            onChangeText={(e) => setText(e)}
          />
        </View>
      </View>
    </View>
  );
}
