import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

function MealItem({ id, title, imageUrl, affordability, complexity, duration }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealsDetails', {
            mealId : id
        });
    }


    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.tagsContainer}>
                        <Text style={styles.tags}>{affordability.toUpperCase()}</Text>
                        <Text style={styles.tags}>{complexity.toUpperCase()}</Text>
                        <View style={styles.durationContainer}>
                            <Text style={styles.tags}>{duration} min</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        overflow: Platform.select({ ios: 'visible', android: 'hidden' })
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },
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
    },
    buttonPressed: {
        opacity: 0.5
    },
    durationContainer: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 4
    }
})