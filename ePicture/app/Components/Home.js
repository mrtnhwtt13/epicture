import * as React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


export default class HomeScreen extends React.Component {
    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', marginTop: "50%" }}>
                <Text style={style.text} >Connect through IMGUR</Text>                
                <View style={style.buttonContainer}>
                    <TouchableHighlight underlayColor='#3f62aa' style={[ style.button ]} onPress={() => this.props.navigation.navigate('Connect')}>
                        <Text style={style.buttonText}>Authorize</Text>
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
        // marginRight: 20,
        marginTop: 15,
        padding: 30,
        width: "80%",
        // paddingLeft: 30,
        // paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    text: {
        margin: 20,
        fontSize: 20,
        textAlign: 'center',
    }
})