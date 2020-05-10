import * as React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';

export default class Success extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                Your picture was uploaded.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
})