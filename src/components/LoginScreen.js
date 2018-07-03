import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './Footer';
import Form from './Form';
import Logo from './Logo';

class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Logo />
                <Form />
                <Footer />
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
    }
});

export default LoginScreen;
