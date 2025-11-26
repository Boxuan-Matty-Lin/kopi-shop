import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  const H_PADDING = 24;
  const CTA_GAP = 12;

  return (
    <View className="flex-1 bg-cream">
      {/* Header Card */}
      <View 
        className="bg-dark-coffee w-full pb-6 rounded-b-3xl shadow-sm"
        style={{ paddingTop: insets.top + 16, paddingHorizontal: H_PADDING }}
      >
        <Text className="text-white text-3xl font-bold tracking-wider">
          Kopi Shop
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingTop: 24,
          paddingHorizontal: H_PADDING,
          paddingBottom: tabBarHeight + 72 + CTA_GAP,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Placeholder for future content */}
      </ScrollView>

      {/* Bottom CTA */}
      <View
        style={{
          paddingHorizontal: H_PADDING,
          paddingBottom: tabBarHeight + CTA_GAP,
        }}
      >
        <Pressable
          onPress={() => router.push("/kopi")}
          className="bg-dark-coffee py-4 px-5 rounded-2xl flex-row items-center justify-center shadow-lg active:opacity-90"
        >
          <Text className="text-white text-lg font-bold tracking-wide">
            Start Kopi Maker →
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
