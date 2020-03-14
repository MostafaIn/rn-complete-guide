import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons';

const GoalItem = ({courseGoals, onDeleteGoal}) => {
    return (
        <FlatList
        data = {courseGoals}
        renderItem={({ item}) => <View style={styles.item}>
            <Text>{item.value}</Text>
            <TouchableOpacity onPress={onDeleteGoal.bind(this, item.id)}>
            <AntDesign name="delete" size={20} color="red" />
            </TouchableOpacity>
        </View>}
        keyExtractor={ item => item.id}
      />
    )
}

export default GoalItem

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        marginVertical:10,
        backgroundColor:'#abc'
      }
})
