import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#080EBD" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    border: 2,

    margin: 2,

    backgroundColor: "#6108C5B1",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
