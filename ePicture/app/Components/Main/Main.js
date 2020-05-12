import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import {getUserInfos} from '../../API/apiRequests'


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
                    <Text style={style.heading}>ePicture</Text>
                </View>
                <ScrollView style={style.mainContainer}>
                    <View style={style.inputContainer}>
                        <TextInput
                            value={this.state.input}
                            onChangeText={(text) => this._updateInput(text)}
                            style={style.input}
                            placeholder='Search images'
                            onSubmitEditing={() => this.handleSubmit()}
                            />
                        <View style={style.buttonContainer}>
                            <TouchableHighlight underlayColor='#8246da' style={[ style.buttonSearch ]} onPress={() => this.handleSubmit()}>
                                <Text style={style.buttonText}>Search</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={style.buttonGroupContainer}>

                        <View style={style.buttonContainer}>
                            <TouchableHighlight underlayColor='#3f62aa' style={[ style.buttonLink ]} onPress={() => this.props.navigation.navigate('MyGallery')}>
                                <Text style={style.buttonText}>My gallery</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={style.buttonContainer}>
                            <TouchableHighlight underlayColor='#3f62aa' style={[ style.buttonLink ]} onPress={() => this.props.navigation.navigate('Upload')}>
                                <Text style={style.buttonText}>Upload an image</Text>
                            </TouchableHighlight>
                        </View>                        

                        <View style={style.buttonContainer}>
                            <TouchableHighlight underlayColor='#3f62aa' style={[ style.buttonLink ]} onPress={() => this.props.navigation.navigate('Favorites')}>
                                <Text style={style.buttonText}>My favorites</Text>
                            </TouchableHighlight>
                        </View>
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
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
    },
    heading: {
        fontSize: 20,
        marginTop: 30,
    },
    container: {
        flex: 1,
    },
    input: {
        height: 60,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        padding: 10,
        fontSize: 18,
        color: '#666666',
        width: '63%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    buttonSearch: {
        marginRight: 20,
        marginTop: 15,
        padding: 20,
        // paddingLeft: 30,
        // paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1e3f83",
        borderRadius: 30
    },
    buttonLink: {
        // marginRight: 20,
        marginTop: 15,
        marginBottom: 15,
        padding: 30,
        width: "90%",
        // paddingLeft: 30,
        // paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1e3f83",
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    mainContainer: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      buttonGroupContainer: {
          marginTop: "20%",
      }
})