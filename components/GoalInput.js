import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [enterGoalText, setenterGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setenterGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enterGoalText);
    setenterGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          value={enterGoalText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color='#f31282' onPress={props.onCancel} title="Cancel" />
          </View>
          <View style={styles.button}>
            <Button color='#5e0acc' onPress={addGoalHandler} title="Add goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  padding:16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e3d0ff",
    borderRadius:6,
    backgroundColor:"#e3d0ff",
    width: "100%",
    padding: 16,
    color: '#120438'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection:'row'
  },
  button: {
    width: 100, 
    marginHorizontal:8
  },
  image: {
    width: 100,
    height: 100,
    margin:20
  }
});
