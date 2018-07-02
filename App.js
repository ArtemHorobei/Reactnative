import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000);
    }
    render() {
        const { count } = this.state;
        return (
          <View style={styles.container}>
            <Text>My first native app!!! Woooooww</Text>
            <Text style={{ color: 'green', fontSize: 24 }}>{ count }</Text>
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
});

export default App;
