import React, { useState } from "react";
import { View, Text, TouchableOpacity, LayoutChangeEvent } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, Octicons, MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type IconKeys = "home" | "shorts" | "create" | "subscription" | "library";

const icon = {
  home: (props: any) => (
    <Entypo name="home" size={24} color="black" {...props} />
  ),
  shorts: (props: any) => (
    <Octicons name="video" size={24} color="black" {...props} />
  ),
  create: (props: any) => (
    <Octicons name="plus-circle" size={24} color="black" {...props} />
  ),
  subscription: (props: any) => (
    <MaterialIcons name="ondemand-video" size={24} color="black" {...props} />
  ),
  library: (props: any) => (
    <MaterialIcons name="video-library" size={24} color="black" {...props} />
  ),
};

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View className="absolute w-full bottom-0 left-0    bg-transparent ">
      <View className="flex flex-row  shadow-2xl shadow-black py-2 bg-mainColor">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          const iconKey = route.name as IconKeys;
          if (
            route.name === "home" ||
            route.name === "shorts" ||
            route.name === "create" ||
            route.name === "subscription" ||
            route.name === "library"
          ) {
            return (
              <TouchableOpacity
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                className={` ${
                  route.name === "subscription" ? "py-4" : "p-4 ml-0.5 mr-2"
                } ${
                  isFocused ? "border-b-2 border-white" : "border-0"
                } flex flex-col transition-all ease-in-out duration-300  justify-center  items-center`}
              >
                {icon[iconKey]({
                  color: "white",
                  size: isFocused ? 30 : 24,
                })}
                <Text
                  className="text-center 
                    text-white"
                >
                  {label.toString()}
                </Text>
              </TouchableOpacity>
            );
          } else {
            return null;
          }
        })}
      </View>
    </View>
  );
}
