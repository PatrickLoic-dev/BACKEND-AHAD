import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SecondaryColor, textSecondaryColor, principalColor } from '../utils/constantes';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface DotProps {
    index : number;
    activeDotIndex : Animated.SharedValue<number>;
}


const Dot : React.FC<DotProps> = ({ activeDotIndex, index }) => {
  const rDotStyle = useAnimatedStyle(() => {

    const isActive = activeDotIndex.value === index;
    return {
      backgroundColor : withTiming(isActive ?principalColor: textSecondaryColor, {duration : 200}),
      width : withTiming(isActive ? 40 : 16, {duration : 200}),
    };
  }) ;

  return (
    <Animated.View style = {styles.dot}>

    </Animated.View>
  );
}

export default Dot

const styles = StyleSheet.create({
    dot : {
        width : 16,
        height : 8,
        backgroundColor : SecondaryColor,
        marginHorizontal : 4,
        borderRadius : 10
    }
})