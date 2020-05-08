import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { AuthSession } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

const CLIENT_ID = "1ea9d8b68e5bf9f";

export default class Auth extends React.Component {
    state = {
        userInfo: null,
        didError: false
    };  // Defined in following steps
    handleLogin = async () => {
        let redirectUrl = AuthSession.getRedirectUrl();
        let results = await AuthSession.startAsync({
          authUrl:
          `https://api.imgur.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token
          &redirect_uri=${encodeURIComponent(redirectUrl)}
          &response_type=token`
        });
    };
    displayError = () => {
        return (
          <View style={styles.userInfo}>
            <Text style={styles.errorText}>
              There was an error, please try again.
            </Text>
          </View>
        );
      }
    render() {
        return (
          <View style={styles.container}>
            <FontAwesome
              name="spotify"
              color="#2FD566"
              size={128}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleSpotifyLogin}
              disabled={this.state.userInfo ? true : false}
            >
              <Text style={styles.buttonText}>
                Login with Spotify
              </Text>
            </TouchableOpacity>
            {this.state.didError ?
              this.displayError() :
              this.displayResults()
            }
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#000',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    button: {
      backgroundColor: '#2FD566',
      padding: 20
    },
    buttonText: {
      color: '#000',
      fontSize: 20
    },
    userInfo: {
      height: 250,
      width: 200,
      alignItems: 'center',
    },
    userInfoText: {
      color: '#fff',
      fontSize: 18
    },
    errorText: {
      color: '#fff',
      fontSize: 18
    },
    profileImage: {
      height: 64,
      width: 64,
      marginBottom: 32
    }
  });