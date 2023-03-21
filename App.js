import { StyleSheet, View, FlatList, Button } from "react-native";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);


  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => { 
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredText,
        id: Math.random().toString(),
      },
    ]);
     endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
   
  };

  return (
    <View style={styles.appContainer}>
      <Button
        onPress={startAddGoalHandler}
        title="Add New Goal"
        color="#a065ec"
      />
      <GoalInput
        onCancel={endAddGoalHandler}
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem onDeleteItem={deleteGoalHandler} itemData={itemData} />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
