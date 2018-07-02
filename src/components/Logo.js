import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 180, height: 180 }} source={require('../images/react.png')} />
                <Text style={styles.logoText}>React Native App</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Logo;
