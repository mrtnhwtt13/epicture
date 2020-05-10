import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';


export default class Main extends React.Component {

    constructor () {
        super()
        this.state = {
            input: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
    _updateInput (input) {
        this.setState({ input });
    }

    handleSubmit() {
        this.props.navigation.push('Results', {search: this.state.input})
    }

    render () {   
        console.log(token)
        return (
            <View style={style.container}>
                <View style={style.headingContainer}>
                    <Text style={style.heading}>Search images</Text>
                </View>
                <ScrollView style={style.mainContainer}>
                    <TextInput
                        value={this.state.input}
                        onChangeText={(text) => this._updateInput(text)}
                        style={style.input}
                        placeholder='What Do You Like?'
                        onSubmitEditing={() => this.handleSubmit()}
                    />
                    <View style={style.buttonContainer}>
                        <TouchableHighlight underlayColor='#3f62aa' style={[ style.button ]} onPress={() => this.handleSubmit()}>
                            <Text style={style.buttonText}>Search</Text>
                        </TouchableHighlight>
                    </View>                            
                </ScrollView>
            </View>
        );
    }
}


const style = StyleSheet.create({    
    headingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed'
    },
    heading: {
        fontSize: 20,
        marginTop: 20
    },
    container: {
        flex: 1
    },
    input: {
        height: 60,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: '#ededed',
        borderRadius: 4,
        padding: 10,
        fontSize: 18,
        color: '#666666'
    },
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
    },
    mainContainer: {
        flex: 1
    }
})