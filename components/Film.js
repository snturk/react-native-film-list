import axios from "axios";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

function Film({ film, setList }) {

    const {name, description, date} = film;

    const removeItem = () => {
        axios.post("http://127.0.0.1:6000/film/delete", film).then((res) => {
            if(res.data == null) {
                setList([])
                return
            }
            setList([...res.data])
        })
    }

    return (
        <View style={styles.film}>
            <View style={styles.filmInfoContainer}>
                <Text style={styles.filmName}>{name}</Text>
                <Text style={styles.filmDesc}>{description}</Text>
                <Text style={styles.filmDate}>{date}</Text>
            </View>
            <TouchableOpacity
                onPress={removeItem}>
                    <AntDesign style={styles.removeBtn} name="delete" size={24} color={'#212b27'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    film: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 8,
        backgroundColor: '#809c8f'
    },
    filmInfoContainer: {
        padding: 19,
        minWidth:'70%',
        maxWidth:'70%',
        flexDirection: "column",
        borderRadius: 5,
        backgroundColor: '#2d3934',
    },
    filmName: {
        color: '#fff',
        fontSize: 14,
        fontWeight: "bold",
        flexWrap: 'wrap'
    },
    filmDesc: {
        fontSize: 13,
        color: '#fff',
        opacity: 0.6
    },
    filmDate: {
        fontSize: 13,
        color: '#fff',
        opacity: 0.4,
        marginTop: 15
    },
    removeBtn: {
        padding: 3,
        borderRadius: 9,
        borderWidth: 1
    }
});

export default Film;