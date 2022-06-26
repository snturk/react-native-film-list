import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Welcome({navigation}) {
    return (
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Welcome! 🚀</Text>
            <Pressable 
            style={styles.navigationButton}
            onPress={() => navigation.navigate('Home')}>
                <Text>See Home Page ➡️</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#598a1d',
        justifyContent: "center",
        alignContent: "center"
    },
    welcomeTitle: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15
    },
    navigationButton: {
        marginTop: 5,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Welcome;