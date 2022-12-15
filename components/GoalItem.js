import { StyleSheet, View, Text, Pressable } from "react-native"

export function GoalItem(props) {
    const { text, id, setGoalsList } = props

    function deleteGoal() {
        setGoalsList(prevGoals => prevGoals.filter(goal => goal.id !== id))
    }

    return (
        <Pressable
            onPress={deleteGoal}
            android_ripple={{ color: "darkcyan", foreground: true }} // only works on android
            style={({ pressed }) => pressed && styles.pressedItem} // to handle the effect on apple
        >
            <View style={styles.goal}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goal: {
        margin: 8,
        borderRadius: 6,
        padding: 8,
        backgroundColor: "#311b6b"
    },
    goalText: {
        color: "white"
    },
    pressedItem: {
        opacity: 0.5
    }
})