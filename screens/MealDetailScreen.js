import { Text, Button, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from "../components/MealDetail/Subtitle";
import List from '../components/MealDetail/List';

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log('Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="Tap me" onPress={headerButtonPressHandler} />
            }
        });
    }, [navigation, headerButtonPressHandler]);;

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText} />
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 280
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#e2b497'
    },
    detailText: {
        color: '#e2b497'
    },
    details: {
        color: '#e2b497'
    }
})