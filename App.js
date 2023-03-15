import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default App = () => {
  const [enterGoalText, setEnterGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterGoalText, id: Math.random().toString() },
    ]);
  };



  return (
    <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(val) => setEnterGoalText(val)}
          style={styles.textInput}
          placeholder="Your course goal"
        />
        <Button onPress={addGoalHandler} title="Add goal" />
      </View> */}
      <GoalInput
        addGoalHandler={addGoalHandler}
        setEnterGoalText={setEnterGoalText}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} />;
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
