import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {


  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.itemData.item.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  goalText: {
    color: "#fff",
  },
});
