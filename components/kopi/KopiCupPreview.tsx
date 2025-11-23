import React from 'react';
import { Dimensions, Text, View } from 'react-native';

interface KopiCupPreviewProps {
  name: string;
}

const { width } = Dimensions.get('window');
const curveRadius = width; // big radius to form a smooth smile at the bottom edge

export const KopiCupPreview = ({ name }: KopiCupPreviewProps) => {
  return (
    <View
      className="w-full h-full bg-cream items-center justify-center overflow-hidden"
      style={{
        borderBottomLeftRadius: curveRadius,
        borderBottomRightRadius: curveRadius,
      }}>
      <View className="items-center mb-6 px-6">
        <Text className="text-5xl font-bold text-dark-coffee text-center leading-tight">
          {name}
        </Text>
      </View>
    </View>
  );
};
