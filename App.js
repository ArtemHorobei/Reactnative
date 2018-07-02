import Logo from './src/components/Logo';
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <Logo />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efffdf',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
