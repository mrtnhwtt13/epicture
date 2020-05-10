import * as React from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImageManipulator from "expo-image-manipulator";

var CLIENT_ID = 'e034a463e9043d0'

export default class Upload extends React.Component {
  state = {
    image: null,
    data: ""
  };

  render() {
    let { image } = this.state;
    const up_button = <Button title="Upload" onPress={this.uploadToImgur} />
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button style={style.button} title="Pick an image from camera roll" onPress={this._pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        {this.state.image ? up_button : <View></View>}
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
        noData: false
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
      const response = await ImageManipulator.manipulateAsync(result.uri, [], { base64: true })
      this.setState({data: JSON.stringify(response)})
    } catch (E) {
      console.log(E);
    }
  };
  
  uploadToImgur = () => {
//   fetch('https://api.imgur.com/3/account/me/settings', {
//       method: 'POST',
//       headers: {
//           'Authorization': 'Bearer ' + token,
//           'Authorization': 'Client-Id '+ CLIENT_ID
//     },
//     body: {
//         'image': this.state.data,
//         'type': 'base64',
//         'image': "https://i.imgur.com/3a0LlQC.jpg"
//     }
//   })
//   .then(response => console.log(JSON.stringify(response)))
//   .catch(error => {
//       console.error(JSON.stringify(error));
//     });
// ================================ below works =========================================
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
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// =====================================test for account==================
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer "+ token);

// var formdata = new FormData();

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
  
//   redirect: 'follow'
// };

// fetch("https://api.imgur.com/3/account/me/settings", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

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