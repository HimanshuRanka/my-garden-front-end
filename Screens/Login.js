import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import Card from "../Shared/Card";
import {Button} from "react-native-web";


export default function Login({navigation}) {
    return(
        <View style={styles.Login}>
            {/*not sure how text inputs work, need to look into that*/}
            <TextInput style={styles.Input}>username: </TextInput>
            <TextInput style={styles.Input}>password: </TextInput>
            <Button onPress={}>Submit</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    Login: {

    },
    Input: {

    },
    Text: {

    },
})