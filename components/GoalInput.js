import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
 

  const [enterGoalText, setenterGoalText] = useState('')

  const goalInputHandler = (enteredText) => {
    setenterGoalText(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enterGoalText);
    setenterGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enterGoalText}
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your course goal"
      />
      <Button onPress={addGoalHandler} title="Add goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderBottomColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
