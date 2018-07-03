import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Footer extends Component {
    render() {
        return (
            <View style={styles.signUpContainer}>
                <Text style={styles.accountText}>Don't have an account yet? </Text>
                <Text style={styles.signUpText}>Sign Up</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default Footer;
