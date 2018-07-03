import React, { Component } from 'react';
import { StyleSheet, StatusBar, ImageBackground } from 'react-native';
import LoginScreen from './src/components/LoginScreen';

class App extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={require('./src/images/bg.png')}>
                <StatusBar hidden />
                <LoginScreen />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
