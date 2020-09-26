import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

export default function PlantCard(props) {
    return(
        <View style={styles.Card}>
            {/*The first view is the container for all the components that go inside the card
               It styles the Card itself
               The second view is for the text, if there was an image we would add an imageView etc,
               rn I am just making the skelleton so none of this really does anything other than flow and
               is very basic*/

                /*if u havent read the docs, all react components return jsx, but by using curly braces,
                  you can write any javascript in and it works
                  Since comments are javascript, I wrote them in curly brackets
                 */
            }
            <View style={styles.Contents}>
                <Text>Hi! I am your plant!</Text>
            </View>
        </View>
    )

}

{/*This is just the style attributes from my stencil app, again as a ref, play around with it*/}
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