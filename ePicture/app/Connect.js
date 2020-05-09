import React from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview'


_handleUrl = url => {
    this.setState({ url });
    let { path, queryParams } = Linking.parse(url);
    alert(`Linked to app with path: ${path} and data: ${JSON.stringify(queryParams)}`);
};

export default class Connect extends React.Component {
    render() {
        const uri = 'https://api.imgur.com/oauth2/authorize?client_id=1ea9d8b68e5bf9f&response_type=token&state=';
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