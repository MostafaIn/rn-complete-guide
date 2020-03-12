import React from 'react'
import { View, Text } from 'react-native'

const FlexBox = () => {
    return (
        <View>
            <View style={{
                backgroundColor:'red',
                width:100,
                height:100,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text> 1 </Text>
            </View>
            <View style={{
                backgroundColor:'green',
                width:100,
                height:100,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text> 2 </Text>
            </View>
            <View style={{
                backgroundColor:'blue',
                width:100,
                height:100,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text> 3 </Text>
            </View>
        </View>
    )
}

export default FlexBox
