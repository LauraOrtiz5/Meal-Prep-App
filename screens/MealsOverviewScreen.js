import { View, Text, StyleSheet, FlatList } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route }) {
    const catID = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    });

    function renderMealItem(itemData) {
        return (
            <MealItem
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                duration={itemData.item.duration}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});