import React from 'react';
import {
    View,
    Text,
    Component,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Image
} from 'react-native';
import ViewImages from './ViewImages'

export default class Main extends React.Component {

    constructor () {
        super()
        this.state = {
            input: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _closeModal () {
        this.props.navigation.pop()
    }

    _updateInput (input) {
        this.setState({ input });
    }

    handleSubmit() {
        this.props.navigation.push('ViewImages', {closeModal: this._closeModal, search: this.state.input})
    }

    render () {     
        let favorites = null;
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
                    />
                    <View style={style.buttonContainer}>
                        <TouchableHighlight underlayColor='#3f62aa' style={[ style.button ]} onPress={() => this.handleSubmit()}>
                            <Text style={style.buttonText}>Search</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={style.favContainer}>
                        <Text style={style.favorites}>RESULTS</Text>
                        {favorites}
                    </View>               
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    favoriteButtonContainer: {
        flexDirection: 'row'
    },
    deleteButton: {
        width: 57,
        height: 57,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e6e6e6'
    },
    deleteText: {
        color: '#979797',
        fontSize: 30
    },
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
    favorite: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        marginLeft: 15,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        marginBottom: 10,
        borderRadius: 4,
        flex: 1
    },
    favoriteText: {
        fontSize: 24,
        color: '#9f9f9f'
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
    favContainer: {
        marginTop: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ededed'
    },
    favorites: {
        color: '#c9c9c9',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 17
    },
    mainContainer: {
        flex: 1
    }
})