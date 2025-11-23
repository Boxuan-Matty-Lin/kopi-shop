import type { OptionItem } from '@/types/kopi';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface OptionSelectorProps<T extends string> {
  label: string;
  options: OptionItem<T>[];
  value: T;
  onChange: (value: T) => void;
}

export const OptionSelector = <T extends string>({
  label,
  options,
  value,
  onChange,
}: OptionSelectorProps<T>) => {
  return (
    <View className="mb-6">
      <Text className="text-lg font-bold text-dark-coffee mb-3 px-4">{label}</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
          rowGap: 10,
          paddingHorizontal: 16,
        }}>
        {options.map((option) => {
          const isSelected = option.code === value;
          return (
            <Pressable
              key={option.code}
              onPress={() => onChange(option.code)}
              className={`px-4 py-2 rounded-md border ${
                isSelected
                  ? 'bg-dark-coffee border-dark-coffee'
                  : 'bg-cream border-grey'
              }`}
            >
              <Text className={`text-base font-semibold ${isSelected ? 'text-white' : 'text-dark-coffee'}`}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
