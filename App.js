import React,{ useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList } from 'react-native';

const App = () =>{
  const [enteredGoal,setEnteredGoal] = useState('')
  const [courseGoals,setCourseGoals] = useState([])

  const handleAdd = () =>{
    setCourseGoals( courseGoals => [...courseGoals,{id: Math.random().toString(), value:enteredGoal}])
  }
  return (
    <View style={styles.container}>
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
        onPress={handleAdd}
        />
      </View>
      <FlatList
        data = {courseGoals}
        renderItem={({ item}) => <View>
        <Text style={styles.item}>{item.value}</Text>
        </View>}
        keyExtractor={ item => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 40
  },
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
  },
  item:{
    padding:10,
   
  }
})
