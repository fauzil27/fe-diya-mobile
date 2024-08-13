import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";

export default function ButtonCstm({
  onPressIn,
  onPressOt,
  press,
  bgClassName,
  children,
}: {
  press?: boolean;
  onPressIn?: () => void;
  onPressOt?: () => void;
  bgClassName?: boolean;
  children?: ReactNode;
}) {
  return (
    <TouchableOpacity>
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOt}
        className={`flex flex-row ${press ? "scale-95" : "scale-100 "} ${
          bgClassName ? "bg-transparent border border-white" : "bg-white"
        } my-1 transition-all  ease-in-out duration-300 justify-center items-center py-3 px-3 rounded-full`}
      >
        {children}
      </Pressable>
    </TouchableOpacity>
  );
}
