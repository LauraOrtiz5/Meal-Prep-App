import { View, Text, StyleSheet } from 'react-native';

function MealDetails({ duration, complexity, affordability, style, textStyle }) {
    return (
        <View style={[styles.tagsContainer, style]}>
            <Text style={[styles.tags, textStyle]}>{affordability.toUpperCase()}</Text>
            <Text style={[styles.tags, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.tags, textStyle]}>{duration}min</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    tagsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6
    },
    tags: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 4
    }
});