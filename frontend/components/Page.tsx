import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { PageInterface } from '../utils/constants'
import { principalColor, red, textSecondaryColor } from '../utils/constantes';
import Animated from 'react-native-reanimated';


interface PageProps {
  page : PageInterface;
  translateX : Animated.SharedValue<number>;
  index : number;
}

const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');

const Page: React.FC<PageProps> = ({ page, index, translateX }) => {
  return (
      <View style = {styles.container}>
        <View style = {styles.cirleContainer}>
          <Image source={page.source} resizeMode='contain'/>
        </View>
        <View>
        <Text style = {styles.title}>{page.title}</Text>
        <Text style = {styles.description}>{page.description}</Text>
        </View>
      </View>
  );
};
export {PAGE_WIDTH};
export default Page;

const CIRCLE_WIDTH = PAGE_WIDTH * 0.7;

const styles = StyleSheet.create({
  container : {
    width : PAGE_WIDTH,
    height : PAGE_HEIGHT,
    alignItems : 'center',
    marginTop:32
  },
  cirleContainer : {
    width : PAGE_WIDTH,
    aspectRatio : 1,
    alignItems : 'center',
    marginBottom : 230
  },
  circle : {
    width : CIRCLE_WIDTH,
    aspectRatio : 1,
    borderRadius : CIRCLE_WIDTH / 2,
    backgroundColor : red,
  },
  description : {
    fontSize : 16, 
    fontWeight : '600',
    color : textSecondaryColor,
    marginHorizontal : 20
  },
  title : {
    fontSize : 24, 
    fontWeight : '900', 
    color : principalColor, 
    marginHorizontal : 20, 
    marginBottom :8
  }
})