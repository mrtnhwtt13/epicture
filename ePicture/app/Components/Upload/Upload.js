import React from 'react'
import { Text, Image, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'


export default class Upload extends React.Component {
    constructor(props) {
        super(props)
    
        this.state ={
            title: '',
            desc: '',
        }
    }

    state = {
        image: null,
        data: '',
    }

    componentDidMount() {
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!')
            }
        }
    }
  
    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
            base64: true,
            })
            if (!result.cancelled) {
                this.setState({ image: result.uri })
            }
            this.setState({ data: result.base64 })
            //console.log(result)
        }
        catch (E) {
            console.log(E)
        }
    }
  
    uploadToImgur = () => {
        console.log(this.state.title)
        console.log(this.state.desc)
  
        var myHeaders = new Headers()
        myHeaders.append('Authorization', 'Bearer ' + token)
    
        var formdata = new FormData()
        formdata.append('image', this.state.data)
        formdata.append('title', this.state.title)
        formdata.append('name', this.state.title)
        formdata.append('description', this.state.desc)
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        }
  
        fetch('https://api.imgur.com/3/image', requestOptions)
            .then((response) => {
                if (response.status === 200) {
                    this.props.navigation.push('Success')
                    this.setState({ image: null })
                    this.setState({ data: '' })
                    this.setState({ title: '' })
                    this.setState({ desc: '' })
                }
                else {
                    this.props.navigation.push('Failure')
                }
            })
            // .then((response) => response.text())
            // .then((response) => console.log(response.text()))
            .catch((error) => console.log('error', error))
    }

    render() {
        let { image } = this.state
        const upload_form = (
            <View style={style.container}>
                <TextInput
                    style={style.input}
                    name="title"
                    placeholder="Title"
                    value={this.state.title} 
                    onChangeText={(text) => this.setState({title: text})}
                />
                <TextInput
                    style={style.input}
                    name="desc"
                    placeholder="Description"
                    value={this.state.desc} 
                    onChangeText={(text) => this.setState({desc: text})}
                />
                <TouchableHighlight
                    underlayColor='#3f62aa'
                    style={style.buttonLink}
                    onPress={this.uploadToImgur}
                >
                <Text style={style.buttonText} >Upload</Text>
                </TouchableHighlight>
            </View>
        )
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableHighlight
                underlayColor='#3f62aa'
                style={style.buttonLink}
                onPress={this._pickImage}
                >
                    <Text style={style.buttonText}>Pick an image from the camera roll</Text>
                </TouchableHighlight>
                {image && (
                    <Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 10, marginTop: 20 }} />
                )}
                {this.state.image ? upload_form : <View></View>}
            </View>
        )
    }  
}


const style = StyleSheet.create({
    input: {
        width: '80%',
        margin: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 5
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    buttonLink: {
        // marginRight: 20,
        marginTop: 15,
        padding: 20,
        width: "90%",
        // paddingLeft: 30,
        // paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1e3f83",
        borderRadius: 30
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
})
