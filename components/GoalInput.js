import React,{ useState} from 'react'
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native'

const GoalInput = ({onAddGoal, visible, onCancel}) => {
    const [enteredGoal,setEnteredGoal] = useState('')

    const addGoalhandler = () =>{
      onAddGoal(enteredGoal);
      setEnteredGoal('')
    }
    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.controller}>
        <TextInput 
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={enteredGoal => setEnteredGoal(enteredGoal)}
        />
        <View style={styles.btns}>
          <Button
            title="CANCEL"
            color="red"
            onPress={onCancel}
          />
          <Button 
            title="ADD" 
            // onPress={() => onAddGoal(enteredGoal)}
            onPress={addGoalhandler} // normal vanilla javascript syntax
            disabled ={!enteredGoal}
          />
        </View>
        </View>
      </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    controller:{
        flex:1,
        justifyContent:'center',
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
      btns:{
        flexDirection:'row',
        padding: 5,
        marginVertical:10,
        // backgroundColor:'#333'
      }
})
