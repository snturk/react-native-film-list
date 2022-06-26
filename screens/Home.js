import React, {  useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text} from "react-native";
import FilmList from "../components/FilmList";
import InputGroup from "../components/InputGroup";
import axios from 'axios';

function Home() {

  const [list, setList] = useState([]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Movie List App</Text>
      <InputGroup list={list} setList={setList} />
      <Text style={styles.filmContainterTitle}>Your Movies</Text>
      <FilmList list={list} setList={setList} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#63826b',
    flexDirection: "column",
    alignContent: "center",
  },

  appTitle : {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 12,
    marginBottom: 20
  },

  filmContainterTitle: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  }
})

export default Home;
