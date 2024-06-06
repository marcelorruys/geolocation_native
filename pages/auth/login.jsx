import React, {useState} from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import styles from "./styles";

export default function Login({navigation}){
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    function logar(){
        
            navigation.navigate('Home')
          }//)
        //   .catch((error) => {
        //     error.code;
        //     error.message;
        //   });
    
    return(
        <View style={styles.container}>
            <Image
                style={styles.login}
                source={require('../../assets/login.png')}
            />
            <View>
                <Text style={styles.titulo}>Login</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Login'
                onChangeText={setUser}
                value={user}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Senha'
                onChangeText={setPass}
                value={pass}
            />
            <Pressable
                style={styles.botao}
                onPress={() => logar()}
            >
                <Text style={styles.texto}>Entrar</Text>
            </Pressable>
        </View>
    );
}