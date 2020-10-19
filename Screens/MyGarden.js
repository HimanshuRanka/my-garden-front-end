import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';

import PlantCard from "../Shared/PlantCard";

const MyGarden = ({navigation}) => {

    const [plants, setPlants] = useState(['SUCCULENT', 'TREE', 'PLANT']);

    const addPlant = () => {
        let table = [...plants];
        table.push("PLANT");
        setPlants(table);
    };

    return (
        <View>
            <FlatList
                data={plants}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('PlantInfo')}>
                        <PlantCard>
                            <Text>{item}</Text>
                        </PlantCard>
                    </TouchableOpacity>
                )}
            />
            <Button onPress={addPlant} title='Add Plant'/>
        </View>
    )

};

export default MyGarden;

