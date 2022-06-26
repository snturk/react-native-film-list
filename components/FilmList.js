import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Film from "./Film";

function FilmList({list, setList}) {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("http://127.0.0.1:6000/film/getAll").then((res) => {
            setList(res.data)
        });
        setIsLoading(false);
      }, [])

    return (
        <View>
            {isLoading ? 
                <Text>Loading...</Text> :
                <FlatList 
                data={list}
                renderItem={ ({ item }) => <Film film={item} setList={setList} /> }
                />
            }
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    filmContainer: {
        marginTop: 15,
        flexDirection: "row",
        textAlign: 'center',
        flexWrap: "wrap",
      }
});

export default FilmList;