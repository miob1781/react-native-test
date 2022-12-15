import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [goalsList, setGoalsList] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)

    function startAddGoalHandler() {
        setModalIsVisible(true)
    }

    function endAddGoalHandler() {
        setModalIsVisible(false)
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.outerContainer}>
                <Button
                    title="Add New Goal"
                    color="#311b6b"
                    onPress={startAddGoalHandler}
                />
                <GoalInput
                    setGoalsList={setGoalsList}
                    visible={modalIsVisible}
                    closeModal={endAddGoalHandler}
                />
                <View style={styles.textContainer}>
                    <FlatList
                        data={goalsList}
                        renderItem={itemData => <GoalItem text={itemData.item.text} id={itemData.item.id} setGoalsList={setGoalsList} />}
                        keyExtractor={item => item.id}
                        alwaysBounceVertical="false"
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        margin: 30,
        flex: 1
    },
    textContainer: {
        flex: 6,
    },
    goal: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#311b6b"
    },
    goalText: {
        color: "#120438"
    },

})
