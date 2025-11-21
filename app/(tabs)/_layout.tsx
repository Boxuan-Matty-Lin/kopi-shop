import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const BAR_SIDE_INSET = 12;
const BAR_RADIUS = 22;
const BAR_HEIGHT_IOS = 86;
const BAR_HEIGHT_ANDROID = 72;
const BAR_BOTTOM_OFFSET = -6;
const BAR_PADDING_TOP = 4;
const BAR_PADDING_BOTTOM_EXTRA = 4;
const TAB_ICON_SIZE = 18;
const TAB_LABEL_SIZE = 10;
const TAB_ITEM_PADDING_VERTICAL = 0;

const KOPI_SIZE = 82;
const KOPI_ICON_SIZE = 38;
const KOPI_LIFT = 20;
const KOPI_BORDER_WIDTH = 6;

const KopiTabButton = ({ onPress, accessibilityState }: BottomTabBarButtonProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';
  const isFocused = accessibilityState?.selected;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.kopiButtonContainer,
        { transform: [{ scale: pressed ? 0.95 : 1 }] },
      ]}>
      <View
        style={[
          styles.kopiButtonCircle,
          {
            backgroundColor: Colors[theme].tint,
            borderColor: Colors[theme].background,
            shadowColor: Colors[theme].tint,
            shadowOpacity: isFocused ? 0.32 : 0.25,
          },
        ]}>
        <IconSymbol size={KOPI_ICON_SIZE} name="cup.and.saucer.fill" color="#FFFFFF" />
      </View>
    </Pressable>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const theme = colorScheme ?? 'light';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
        tabBarInactiveTintColor: Colors[theme].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <View
            style={[
              styles.tabBarBackground,
              {
                backgroundColor: Colors[theme].background,
                borderColor: Colors[theme].tabIconDefault,
                borderTopColor: Colors[theme].tabIconDefault,
                shadowColor: Colors[theme].tabIconDefault,
              },
            ]}
          />
        ),
        tabBarStyle: {
          position: 'absolute',
          left: BAR_SIDE_INSET,
          right: BAR_SIDE_INSET,
          backgroundColor: 'transparent',
          height: (Platform.OS === 'ios' ? BAR_HEIGHT_IOS : BAR_HEIGHT_ANDROID) + insets.bottom,
          paddingBottom: insets.bottom + BAR_PADDING_BOTTOM_EXTRA,
          paddingTop: BAR_PADDING_TOP,
          bottom: BAR_BOTTOM_OFFSET,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: TAB_LABEL_SIZE,
          fontWeight: '600',
        },
        tabBarItemStyle: {
          flex: 1,
          paddingVertical: TAB_ITEM_PADDING_VERTICAL,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={TAB_ICON_SIZE} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <IconSymbol size={TAB_ICON_SIZE} name="star.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="kopi"
        options={{
          title: '',
          tabBarLabel: () => null,
          tabBarButton: (props) => <KopiTabButton {...props} />,
          tabBarItemStyle: { flex: 1, marginTop: -KOPI_LIFT },
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color }) => <IconSymbol size={TAB_ICON_SIZE} name="list.bullet.clipboard.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: 'Me',
          tabBarIcon: ({ color }) => <IconSymbol size={TAB_ICON_SIZE} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  kopiButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -KOPI_LIFT,
  },
  kopiButtonCircle: {
    width: KOPI_SIZE,
    height: KOPI_SIZE,
    borderRadius: KOPI_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: KOPI_BORDER_WIDTH,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  tabBarBackground: {
    flex: 1,
    borderTopLeftRadius: BAR_RADIUS,
    borderTopRightRadius: BAR_RADIUS,
    borderTopWidth: 1,
    borderWidth: 1,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
});
