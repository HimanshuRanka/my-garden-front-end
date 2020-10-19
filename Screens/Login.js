import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput, Button} from 'react-native';




const Login = ({navigation}) => {

    const [colr, setColr] = useState('#eeeeee');

    const pressHandler = (us, ps) => {
        //sends the us ps to backend to store and verify
        setColr('#333333');
    };

    return(
        <View>
            {/*not sure how text inputs work, need to look into that*/}
            <TextInput> </TextInput>
            <TextInput> </TextInput>
            <Button
                title="LOGIN"
                onPress={() => navigation.navigate('MyGarden')}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    Login: {

    },
    Input: {

    },
    Text: {

    },
});

export default Login;