import { KopiCupPreview } from "@/components/kopi/KopiCupPreview";
import { OptionSelector } from "@/components/kopi/OptionSelector";
import { useKopiMakerStore } from "@/stores/kopiMakerStore";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  MILKINESS_OPTIONS,
  STRENGTH_OPTIONS,
  SWEETNESS_OPTIONS,
  TEMPERATURE_OPTIONS,
} from "@/types/kopi";
import React from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");
const CURVE_HEIGHT = 80;
const CURVE_DEPTH = 50;
const SVG_H = CURVE_HEIGHT + CURVE_DEPTH;

export default function KopiScreen() {
  const {
    milkiness,
    sweetness,
    strength,
    temperature,
    setMilkiness,
    setSweetness,
    setStrength,
    setTemperature,
    displayName,
  } = useKopiMakerStore();

  const colorScheme = useColorScheme() ?? "light";
  const topBg = Colors[colorScheme].background;

  return (
    <View className="flex-1 bg-warm-beige">
      {/* Top Section: Preview (40%) */}
      <View style={{ flex: 0.4, zIndex: 2, backgroundColor: topBg }}>
        <KopiCupPreview name={displayName()} />

        {/* 微笑曲线分界 */}

        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            // 关键：往下压 CURVE_DEPTH，让“曲线边”贴在分界处
            bottom: -CURVE_DEPTH,
            zIndex: 999,
            elevation: 999, // 安卓需要
          }}
        >
          <Svg width={width} height={SVG_H} viewBox={`0 0 ${width} ${SVG_H}`}>
            <Path
              d={`
        M 0 0
        L ${width} 0
        L ${width} ${CURVE_HEIGHT}
        Q ${width / 2} ${CURVE_HEIGHT + CURVE_DEPTH} 0 ${CURVE_HEIGHT}
        Z
      `}
              fill={topBg}
            />
          </Svg>
        </View>
      </View>

      {/* Bottom Section: Controls (60%) */}
      <View className="flex-[0.6] bg-warm-beige pt-6" style={{ zIndex: 1 }}>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 0 }}
        >
          <OptionSelector
            label="Milk"
            options={MILKINESS_OPTIONS}
            value={milkiness}
            onChange={setMilkiness}
          />
          <OptionSelector
            label="Sugar"
            options={SWEETNESS_OPTIONS}
            value={sweetness}
            onChange={setSweetness}
          />
          <OptionSelector
            label="Strength"
            options={STRENGTH_OPTIONS}
            value={strength}
            onChange={setStrength}
          />
          <OptionSelector
            label="Temperature"
            options={TEMPERATURE_OPTIONS}
            value={temperature}
            onChange={setTemperature}
          />
        </ScrollView>
      </View>

      {/* Brew Button */}
      <View className="absolute bottom-8 left-0 right-0 px-6">
        <Pressable
          className="bg-dark-coffee py-4 rounded-2xl items-center shadow-lg active:opacity-90"
          onPress={() => console.log("Brewing:", displayName())}
        >
          <Text className="text-white text-xl font-bold tracking-wider">
            BREW
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
