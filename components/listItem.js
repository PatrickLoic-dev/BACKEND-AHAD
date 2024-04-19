import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { avatar } from '../utils/images'

const listItem = () => {
return (
            <TouchableOpacity style = {styles.item}>
                        <Image style = {styles.avatar} source={avatar}/>
                        <View style = {styles.content}>
                            <Text style = {{fontWeight : '900', fontSize :14}}>AirBnb</Text>
                            <Text style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 12}}>Housing</Text>
                        </View>
                        <Text  style = {{fontWeight : '600', color: textSecondaryColor, fontSize : 14}}>-1500</Text>
            </TouchableOpacity>
)
}

export default listItem

const styles = StyleSheet.create({
    item : {
        display : "flex", 
        flexDirection: "row",
        alignItems : "center",
        paddingHorizontal : 8,
        marginBottom: 16
    },
    avatar : {
        marginLeft : 16,
        height : 40,
        width : 40,
        marginRight :8
    }, 
    content : {
        marginRight : 180
    },
})