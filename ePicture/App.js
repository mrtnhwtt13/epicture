import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from "expo-image-manipulator";


export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
    data: ""
  };

  render() {
    let { image } = this.state;
    const up_button = <Button title="Upload" onPress={this.uploadToImgur} />
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={this._pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        {this.state.image ? up_button : <View></View>}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
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
    authorizeApp = () => {
      fetch('https://api.imgur.com/oauth2/authorize?client_id=1ea9d8b68e5bf9f&response_type=token', {
        method: 'POST',
      //   headers: {
      //       'Authorization': 'Client-ID 1ea9d8b68e5bf9f'
      // },
      })
      .then(response => console.log(JSON.stringify(response)))
  .catch(error => {
      console.error(JSON.stringify(error));
    });
    }
  fetch('https://api.imgur.com/3/upload', {
      method: 'POST',
      headers: {
          'Authorization': 'Client-ID 1ea9d8b68e5bf9f'
    },
    body: JSON.stringify({
        'image': this.state.data,
        'type': 'base64'
    })
  })
  .then(response => console.log(JSON.stringify(response)))
  .catch(error => {
      console.error(JSON.stringify(error));
    });
  }
}