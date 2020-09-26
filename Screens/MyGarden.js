import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from "../Shared/Card";
import {Button} from "react-native-web";
import PlantCard from "../Shared/PlantCard";

export default function MyGarden({navigation}) {

    const [plants, setPlants] = useState({});

    return (
        <View>
            <FlatList
                data={plants}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('PlantInfo', {id: item.id})}>
                        <PlantCard>
                            <Text>{item.name}</Text>
                        </PlantCard>
                    </TouchableOpacity>
                )}
            />
            <Button onPress={() => navigation.navigate('PlantDB')} title='Add Plant'/>
        </View>
    )

}