import * as React from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class Upload extends React.Component {
  state = {
    image: null,
    data: ""
  };

  render() {
    let { image } = this.state;
    const upload_form = <Button style={style.button} title="Upload" onPress={this.uploadToImgur} />
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button style={style.button} title="Pick an image from camera roll" onPress={this._pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        {this.state.image ? upload_form : <View></View>}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log(token)
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
      this.setState({data: result.base64})
      //console.log(result)
    } catch (E) {
      console.log(E);
    }
  };
  
  uploadToImgur = () => {
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+ token);

var formdata = new FormData();
formdata.append("image", this.state.data);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.imgur.com/3/image", requestOptions)
  .then( response => {
    if(response.status === 200){
      this.props.navigation.push('Success')
      this.setState({image: null})
      this.setState({data: ""})
    } else {
      this.props.navigation.push('Failure')
    }
  }
  )
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
}

const style = StyleSheet.create({    
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
})