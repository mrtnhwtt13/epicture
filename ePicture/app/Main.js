import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import {getUserInfos} from './API/apiRequests'


export default class Main extends React.Component {

    constructor () {
        super()
        this.state = {
            input: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        getUserInfos(token)
            .then((response) => {
                username = response.data.account_url 
                }, (error) => {
                    console.log('error: ', error)
                    })       
    }
        
    _updateInput (input) {
        this.setState({ input });
    }

    handleSubmit() {
        this.props.navigation.push('Results', {search: this.state.input})
    }

    render () {   
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
                        <TouchableHighlight underlayColor='#8246da' style={[ style.buttonSearch ]} onPress={() => this.handleSubmit()}>
                            <Text style={style.buttonText}>Search</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={style.buttonContainer}>
                        <TouchableHighlight underlayColor='#3f62aa' style={[ style.buttonLink ]} onPress={() => this.props.navigation.navigate('Favorites')}>
                            <Text style={style.buttonText}>My favorites</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={style.buttonContainer}>
                        <TouchableHighlight underlayColor='#3f62aa' style={[ style.buttonLink ]} onPress={() => this.props.navigation.navigate('Gallery')}>
                            <Text style={style.buttonText}>My gallery</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={style.buttonContainer}>
                        <TouchableHighlight underlayColor='#3f62aa' style={[ style.buttonLink ]} onPress={() => this.props.navigation.navigate('Upload')}>
                            <Text style={style.buttonText}>Upload an image</Text>
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
    buttonSearch: {
        marginRight: 20,
        marginTop: 15,
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#593193",
        borderRadius: 4
    },
    buttonLink: {
        marginRight: 20,
        marginTop: 15,
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1e3f83",
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