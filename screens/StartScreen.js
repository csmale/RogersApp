import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import MyInput from '../components/MyInput.js';
import Password from '../components/Password.js';
import MyButton from '../components/MyButton.js';
import ImageButton from '../components/ImageButton.js';
import AppContext from '../components/AppContext.js';
import { useContext } from 'react';

export default function StartScreen(props) {
    const myContext = useContext(AppContext);
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/splash.jpg')} />
            <Text style={styles.bigtext}>Welcome to GateMaster</Text>
            <Text style={styles.text}>Please log in to the application</Text>
            <MyInput label='User name:' placeholder='username' value={myContext.UserLogin} inputMode='email' onChangeText={myContext.setUserLogin}></MyInput>
            <Password label='Password:' placeholder='password' value=''></Password>
            <MyButton caption='Sign in' onPress={()=>navigation.navigate('Main')} {...props} />
            <Text style={styles.text}>Don't have an account yet?&nbsp;&nbsp;
                <Pressable
                    onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.signup}>Sign up</Text>
                </Pressable>
            </Text>
            <ImageButton caption='Google' image={require('../images/login_google.png')} onPress={()=>navigation.navigate('Main')} {...props} />
            <ImageButton caption='Twitter' image={require('../images/login_microsoft.png')} onPress={()=>navigation.navigate('Main')} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '200px',
        width: '100%'
    },
    text: {
        fontSize: 14,
        fontWeight: "normal"
    },
    bigtext: {
        fontSize: 20,
        fontWeight: "bold",
    },
    signup: {
        fontSize: 14,
        fontWeight: "bold"
    },
});
