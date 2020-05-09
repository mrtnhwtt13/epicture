import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/Home';
import Main from './app/Main';
import Results from './app/Results';
import Connect from './app/Connect';


const Stack = createStackNavigator();


export default class App extends React.Component {
    render () {
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
                        name="Results"
                        options={{ title: 'Results' }}
                        component={Results}
                    />
                    <Stack.Screen
                        name="Connect"
                        options={{ title: 'Connect' }}
                        component={Connect}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


//console.disableYellowBox = true;