import React from 'react'
import {StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'


const webviewRef = 'webview';
const CLIENT_ID = 'e034a463e9043d0';


export default class Connect extends React.Component {    

    constructor(props) {
        super(props);
    }    
    
    _changeNavigationState = async (webView) => {
       if (this._splitUrl(webView.url) === true) {           
        this.props.navigation.navigate('Main');
       }
    };

    _splitUrl(url) {
        if (url.search("access_token=") > 0) { 
            let array = url.split("=");
            token = array[2].split('&')[0];
            return (true);     
        }        
        return (false);
    }

    webviewProps = {
        style: styles.webview_container,
        ref: webviewRef,
        javaScriptEnabled: true,
        onNavigationStateChange: this._changeNavigationState.bind(this),
        source: {
            uri: 'https://api.imgur.com/oauth2/authorize?client_id=' + CLIENT_ID + '&response_type=token&state=APPLICATION_STATE',
        }
    };

    render() {
        return (
            <WebView  {...this.webviewProps}/>
        )

    }
}


const styles = StyleSheet.create({
    main_container: {
        backgroundColor: 'black'
    },
    webview_container: {
        flex: 1
    }
});