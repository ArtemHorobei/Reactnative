import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class Counter extends Component {
    state = { count: 0 };
    componentDidMount() {
        setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
    }
    handleClickClearCount = () => {
        this.setState({ count: 0 })
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>{this.state.count}</Text>
                <Button
                    onPress={this.handleClickClearCount}
                    title="Clear count"
                    color="green"
                />
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
});

export default Counter;
