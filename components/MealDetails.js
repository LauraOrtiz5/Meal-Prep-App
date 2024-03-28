import { View, Text, StyleSheet } from 'react-native';

function MealDetails({ duration, complexity, affordability }) {
    return (
        <View style={styles.tagsContainer}>
            <Text style={styles.tags}>{affordability.toUpperCase()}</Text>
            <Text style={styles.tags}>{complexity.toUpperCase()}</Text>
            <Text style={styles.tags}>{duration}min</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    tagsContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 8
    },
    tags: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 4
    }
});