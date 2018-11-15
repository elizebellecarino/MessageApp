import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';


class MessageScreen extends Component {
    static navigationOptions = {
        header: null
    }
    
render() {
    return (
        <View>
        
        
        
        <Text>Message</Text>
        </View>
       
       
    );
  }
}

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
  }
  
});