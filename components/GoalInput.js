import React,{ useState} from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

const GoalInput = ({onAddGoal}) => {
    const [enteredGoal,setEnteredGoal] = useState('')

    return (
        <View style={styles.controller}>
        <TextInput 
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={enteredGoal => setEnteredGoal(enteredGoal)}
        />
        <Button 
        title="ADD" 
        style={styles.btn}
        // onPress={() => onAddGoal(enteredGoal)}
        onPress={onAddGoal.bind(this, enteredGoal)} // normal vanilla javascript syntax

        />
      </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    controller:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:40
      },
      input:{
        width:'80%',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#001',
        borderRadius:25, 
        padding:10
      },
      btn:{
        borderWidth:1,
        borderColor:'#333',
        borderStyle:'solid',
        borderRadius:50,
        padding: 5,
        backgroundColor:'#333'
      }
})
