import React,{ useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () =>{
  const [courseGoals,setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false)

  const handleAdd = (goalTitle) =>{
    setCourseGoals( courseGoals => [...courseGoals,{id: Math.random().toString(), value:goalTitle}])
    setIsAddModal(false)  
  }

  const handleRemove = goalId =>{
    setCourseGoals( currentGoals =>{
      return currentGoals.filter( goal => goal.id !== goalId)
    });
  }

  const onCancel = () =>{
    setIsAddModal(false)
  };

  return (
    <View style={styles.container}>
      <Button 
        title="ADD A GOAL"
        onPress={() => setIsAddModal(true)}
      />
      <GoalInput 
      visible={isAddModal}
      onAddGoal = {handleAdd} 
      onCancel = {onCancel}
      />
      <GoalItem 
      courseGoals = {courseGoals} 
      onDeleteGoal = {handleRemove}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 40
  }
})
