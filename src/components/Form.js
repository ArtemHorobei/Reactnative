import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class Form extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    placeholderTextColor="gray"
                    underlineColorAndroid="black"
                    placeholder="Enter login"/>
                <TextInput
                    style={styles.inputBox}
                    placeholderTextColor="gray"
                    underlineColorAndroid="black"
                    placeholder="Enter password"/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        width: 300,
        marginBottom: 10,
        padding: 5,
        borderColor: 'white',
    },
    button: {
        padding: 15,
        width: 300,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    }
});

export default Form;
