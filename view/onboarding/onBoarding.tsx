import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { PAGES } from "../../utils/constants";
import { OnBoardingColor, principalColor, red } from "../../utils/constantes";
import Page, { PAGE_WIDTH } from "../../components/Page";
import { arrow_right } from "../../utils/images";
import Dot from "../../components/Dot";
import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

function OnBoarding() {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
        console.log( event.contentOffset.x);
        translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH);
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.ScrollView
        style={{ flex: 1 }}
        horizontal
        pagingEnabled
        onScroll = {scrollHandler}
        showsHorizontalScrollIndicator={false}
      >
        {PAGES.map((page, index) => (
            <Page key={index.toString()} 
                page={page} 
                index={index} 
                translateX = {translateX}
                />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        {/* Paginator */}
        <View
          style={[
            styles.fillCenter,
            { flexDirection: "row", marginRight: 190, padding: 0 },
          ]}
        >
          {PAGES.map((_, index) => (
            <Dot
              key={index.toString()}
              index={index}
              activeDotIndex={activeIndex}
            />
          ))}
        </View>

        {/* Button */}

        <View style={[styles.fillCenter]}>
          <View
            style={{
              backgroundColor: principalColor,
              width: 44,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Image source={arrow_right} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: OnBoardingColor,
  },
  footer: {
    height: 50,
    marginBottom: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paginator: {},
  fillCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OnBoarding;
