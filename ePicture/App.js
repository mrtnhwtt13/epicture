import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './app/Main'
import ViewImages from './app/ViewImages';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to Epicture !</Text>
            <View style={style.buttonContainer}>
                <TouchableHighlight underlayColor='#3f62aa' style={[ style.button ]} onPress={() => navigation.navigate('Main')}>
                    <Text style={style.buttonText}>Start</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#3c3c46',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                }}
            >
                <Stack.Screen
                    name="Home"
                    options={{ title: 'Home' }}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Main"
                    options={{ title: 'Search' }}
                    component={Main}
                />
                <Stack.Screen
                    name="ViewImages"
                    options={{ title: 'Results' }}
                    component={ViewImages}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


//console.disableYellowBox = true;

const style = StyleSheet.create({    
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        marginRight: 20,
        marginTop: 15,
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        borderRadius: 4
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default App;