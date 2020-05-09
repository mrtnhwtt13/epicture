import * as React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


export default class HomeScreen extends React.Component {
    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Welcome to Epicture !</Text>
                <View style={style.buttonContainer}>
                    <TouchableHighlight underlayColor='#3f62aa' style={[ style.button ]} onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={style.buttonText}>Start</Text>
                    </TouchableHighlight>
                </View>
                <View style={style.buttonContainer}>
                    <TouchableHighlight underlayColor='#3f62aa' style={[ style.button ]} onPress={() => this.props.navigation.navigate('Connect')}>
                        <Text style={style.buttonText}>Connect</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


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