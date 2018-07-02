import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground, Text } from 'react-native';
import Form from './src/components/Form';
import Logo from './src/components/Logo';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<ImageBackground style={styles.backgroundImage} source={require('./src/images/bg.png')}>*/}
                    <StatusBar hidden />
                    <Logo />
                    <Form />
                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Don't have an account yet? Sign Up</Text>
                    </View>
                {/*</ImageBackground>*/}
            </View>
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
    },
    signUpText: {
        fontSize: 10,
        color: 'black',
    }
});

export default App;
