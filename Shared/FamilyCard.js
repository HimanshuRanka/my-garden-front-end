import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

export default function FamilyCard(props) {
    return(
        <View style={styles.Card}>
            <View style={styles.Contents}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    Contents: {
        marginHorizontal: 18,
        marginVertical: 20,
    }
});