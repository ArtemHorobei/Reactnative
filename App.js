import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground, Text } from 'react-native';
import Form from './src/components/Form';
import Logo from './src/components/Logo';

class App extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={require('./src/images/bg.png')}>
                <StatusBar hidden />
                <Logo />
                <Form />
                <View style={styles.signUpContainer}>
                    <Text style={styles.accountText}>Don't have an account yet? </Text>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>
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
    backgroundImage: {
        width: null,
        height: null,
    },
    signUpContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    accountText: {
        fontSize: 10,
        color: 'black',
    },
    signUpText: {
        fontSize: 10,
        color: 'white',
    },
});

export default App;
