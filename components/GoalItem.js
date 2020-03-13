import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const GoalItem = ({courseGoals}) => {
    return (
        <FlatList
        data = {courseGoals}
        renderItem={({ item}) => <View>
        <Text style={styles.item}>{item.value}</Text>
        </View>}
        keyExtractor={ item => item.id}
      />
    )
}

export default GoalItem

const styles = StyleSheet.create({
    item:{
        padding:10,
       
      }
})
