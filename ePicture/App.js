import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/Components/Home';
import Main from './app/Components/Main/Main';
import Results from './app/Components/Search/Results';
import Connect from './app/Components/Auth/Connect';
import Favorites from './app/Components/Favorites/Favorites'
import HotPage from './app/Components/HotPage/HotPage'
import MyGallery from './app/Components/MyGallery/MyGallery'
import Upload from './app/Components/Upload/Upload'
import Success from './app/Components/Response/Success'
import Failure from './app/Components/Response/Failure'
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
                            backgroundColor: '#1e3f83',
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
                        options={{headerShown: false}}
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name="Connect"
                        options={{headerShown: false}}
                        component={Connect}
                    />
                    <Stack.Screen
                        name="Main"
                        options={{headerShown: false}}
                        component={Main}
                    />
                    <Stack.Screen
                        name="Results"
                        options={{ title: 'Results' }}
                        component={Results}
                    />
                    <Stack.Screen
                        name="HotPage"
                        options={{ title: 'Explore' }}
                        component={HotPage}
                    />
                    <Stack.Screen
                        name="Favorites"
                        options={{ title: 'My Favorites' }}
                        component={Favorites}
                    />
                    <Stack.Screen
                        name="MyGallery"
                        options={{ title: 'My Gallery' }}
                        component={MyGallery}
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
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
} 


//console.disableYellowBox = true;
