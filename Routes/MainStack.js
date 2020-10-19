import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "../Screens/Login";
import MyGarden from "../Screens/MyGarden";
import PlantInfo from "../Screens/PlantInfo";
import PlantDB from "../Screens/PlantDB";

const MainStack = createStackNavigator();

const Navigator = () => {
    return(
        <NavigationContainer>
            {
                /*
                 My understanding of navigation is a lil flimsy so dont pay mind to this atm
                 Will be working on it soon and fixing the flow once i brush up on it again
                 But this is basically the file where like we create all the navigation stuff
                 */
            }
            <MainStack.Navigator initialRouteName="Login">
                <MainStack.Screen name="Login" component={Login} />
                <MainStack.Screen name="MyGarden" component={MyGarden} />
                <MainStack.Screen name="PlantInfo" component={PlantInfo} />
                <MainStack.Screen name="PlantDB" component={PlantDB} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
};

export default Navigator;