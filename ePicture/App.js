import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/Home';
import Main from './app/Main';
import Results from './app/Results';
import Connect from './app/Connect';
import Upload from './app/Upload'
import Success from './app/Response/Success'
import Failure from './app/Response/Failure'
import MyImages from './app/MyImages'
import MyImageCard from './app/MyImageCard'
import './app/API/storeToken';


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
                        name="Upload"
                        options={{ title: 'Upload an image' }}
                        component={Upload}
                    />
                    <Stack.Screen
                        name="Success"
                        options={{ title: 'Success' }}
                        component={Success}
                    />
                    <Stack.Screen
                        name="Failure"
                        options={{ title: 'Failure' }}
                        component={Failure}
                    />
                    <Stack.Screen
                        name="Connect"
                        options={{ title: 'Connect' }}
                        component={Connect}
                    />
                    <Stack.Screen
                        name="MyImages"
                        options={{ title: 'MyImages' }}
                        component={MyImages}
                    />
                    <Stack.Screen
                        name="MyImageCard"
                        options={{ title: 'MyImageCard' }}
                        component={MyImageCard}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
} 


//console.disableYellowBox = true;