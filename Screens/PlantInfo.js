import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from "../Shared/Card";
import {Button} from "react-native-web";
import PlantCard from "../Shared/PlantCard";


export default function PlantInfo({navigation}) {
    const plantid = props.id

    return (
        <View>
            <Text>This is all the plant info for {plantid} without any styling</Text>
        </View>
    )
}