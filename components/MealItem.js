import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

function MealItem({ title, imageUrl, affordability, complexity, duration }) {

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.tagsContainer}>
                        <View>
                            <Text style={styles.tags}>{affordability.toUpperCase()}</Text>
                        </View>
                        <Text style={styles.tags}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.tags}>{duration} min</Text>
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
    }
})