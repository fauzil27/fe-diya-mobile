import { useEffect } from "react";
import { useNavigation } from "expo-router";

export default function useHeaderShown() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
}
