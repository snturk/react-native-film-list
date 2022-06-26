import axios from "axios";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { getFormattedDate } from "../utils/commonUtils";

function InputGroup({list, setList}) {

    const [filmName, setFilmName] = useStateWithCallbackLazy("")
    const [filmDescription, setFilmDescription] = useStateWithCallbackLazy("");
    const [filmDate, setFilmDate] = useStateWithCallbackLazy("")
    const [isNameValid, setIsNameValid] = useStateWithCallbackLazy(true)
    const [isDateValid, setIsDateValid] = useStateWithCallbackLazy(true)
    const [isDescValid, setIsDescValid] = useStateWithCallbackLazy(true)
    const [buttonActive, setButtonActive] = useState(false)

    useEffect(() => {
        checkInputsValid()
    }, [filmName, filmDate])
    
    useEffect(() => {
        checkButtonState()
    }, [isNameValid, isDateValid, isDescValid])

      
    const addFilm = () => {
        const film = {
            name: filmName,
            description: filmDescription,
            date: filmDate
        }
        axios.post("http://127.0.0.1:6000/film/add", film).then((res) => {
            console.log(res.data);
            setList([...res.data])
        })

        resetForm();
    }
    
    const isFormValid = () => {
        return isNameValid && isDateValid && isDescValid
    }

    const resetForm = () => {
        setFilmName("")
        setFilmDate("")
        setFilmDescription("")
        setIsNameValid(true)
        setIsDateValid(true)
        setIsDescValid(true)
    }

    const checkButtonState = () => {
        setButtonActive(isFormValid())
    }

    const checkInputsValid = () => {
        setIsNameValid(filmName != null && filmName.length > 0)
        setIsDateValid(filmDate != null && filmDate.length > 0)
        setIsDescValid(filmDescription != null & filmDescription.length > 0)
    }

    return (
        <View>
            <View>
                <TextInput
                style={styles.input}
                placeholder='Enter a movie name'
                onChangeText={(val) => setFilmName(val)}
                value={filmName}
                ></TextInput>
                <TextInput
                style={styles.input}
                placeholder='Enter Description'
                onChangeText={(val) => setFilmDescription(val)}
                value={filmDescription}
                ></TextInput>
                <TextInput
                style={styles.input}
                placeholder='Enter year'
                onChangeText={(val) => setFilmDate(val)}
                value={filmDate}
                ></TextInput>
            </View>
            <TouchableOpacity
                disabled={!buttonActive}
                style={[styles.addBtn, buttonActive ? styles.buttonActive : styles.buttonPassive]}
                onPress={addFilm}>
                <Text>Add Movie</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '55%',
        alignSelf: "center",
        padding: 6,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        textAlign: "center",
        backgroundColor: '#fcc'
      },
      addBtn: {
        borderRadius: 5,
        marginTop: 14,
        padding: 7,
        borderWidth: 1,
        textAlign: "center",
        alignSelf: "center"
      },
    
      buttonActive: {
        backgroundColor: '#67a390'
      },
      
      buttonPassive: {
        backgroundColor: '#424447'
      }
});

export default InputGroup;