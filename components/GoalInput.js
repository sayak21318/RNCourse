import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(val) => props.setEnterGoalText(val)}
        style={styles.textInput}
        placeholder="Your course goal"
      />
      <Button onPress={props.addGoalHandler} title="Add goal" />
    </View>
  );
}

export default GoalInput

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