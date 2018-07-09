import React, { Component } from 'react';
import { StyleSheet, StatusBar, ImageBackground } from 'react-native';
import HomeScreen from './src/components/LoginScreen';
import { Provider } from 'react-redux';
import store from './src/store';

class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <ImageBackground style={styles.container} source={require('./src/images/bg.png')}>
                <StatusBar hidden />
                <HomeScreen />
            </ImageBackground>
        </Provider>
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
