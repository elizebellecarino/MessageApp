import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Header, Left, Icon } from 'native-base';

class NameScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state={
        name: ''
    }
    
    onChangeText= name =>{
        this.setState.name
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Header style={{backgroundColor: "#5f9ea0"}}>
                   
                </Header>

                <View style={styles.container}>
                   <Text style={styles.title}> What is your name? </Text>
                   <TextInput 
                   style={styles.nameInput} 
                   value={this.state.name}
                   />
                
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Message')}>
                  <Text style={styles.buttonStyle}>
                   Next
                  </Text>
                    
                </TouchableOpacity>
                </View> 
                </View>
           
           
        );
    }
}
const offset= 24;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
    title: {
        color: "black",
        fontSize: 25,
        marginLeft: "-25%",
    },
    nameInput: { 
        width: 300,
        height: 35,
        borderColor: 'black',
        borderWidth: 1,
      },
    buttonStyle: {
        marginLeft: offset,
        fontSize: offset,
      
    },
});

export default NameScreen;
