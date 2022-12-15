import { useState } from "react"
import { StyleSheet, TextInput, Button, View, Modal, Image } from "react-native"

export function GoalInput(props) {
    const { setGoalsList, visible, closeModal } = props
    const [goalInput, setGoalInput] = useState("")

    function generateKey() {
        return goalInput + Math.random()
    }

    function handleInputChange(enteredText) {
        setGoalInput(enteredText);
    }
    
    function addCourseGoal() {
        setGoalsList(prevGoals => [
            ...prevGoals,
            { text: goalInput, id: generateKey() }
        ])
        setGoalInput("")
        closeModal();
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput
                    style={styles.textInput}
                    placeholder='new goal'
                    value={goalInput}
                    onChangeText={handleInputChange}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={closeModal} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add' onPress={addCourseGoal} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        padding: 8,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 16
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})