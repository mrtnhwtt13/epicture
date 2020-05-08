import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './app/Main'
import ViewImages from './app/ViewImages';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to Epicture !</Text>
            <Button
                title="Start"
                onPress={() => navigation.navigate('Main')}
            />
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

//init branch


export default App;