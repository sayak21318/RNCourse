import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {


  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },

  pressedItem: {
    backgroundColor: '#210644'
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});
