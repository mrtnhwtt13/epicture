import React from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview'

export default class Connect extends React.Component {
    render() {
        const uri = 'https://api.imgur.com/oauth2/authorize?client_id=8129a5baf4d8e11&response_type=token&state=';
        return (
            <WebView
                ref={(ref) => { this.webview = ref; }}
                source={{ uri }}
                onNavigationStateChange={(event) => {
                    if (event.url !== uri) {
                        this.webview.stopLoading();
                        Linking.openURL(event.url);
                    }
                }}
            />
        );
    }
}