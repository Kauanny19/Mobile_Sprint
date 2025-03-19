import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image} from "react-native";
import api from "../axios/axios";

export default function Cadastro({ navigation }){
    const [user, setUser] = useState({
        name:"",
        email:"",
        cpf:"",
        password:""
    });
    
    async function handleCadastro(){
        await api.postCadastro(user).then(
            (response)=>{
                Alert.alert('OK', response.data.message);
                navigation.navigate("Login");
            },(error)=>{
                Alert.alert('Erro', error.response.data.error);
            }
        );
    }
    
    return(
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
            </View>

            {/* Conteúdo principal */}
            <View style={styles.content}>
                <View style={styles.cadastroCard}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoWrapper}>

                        <Image 
                            source={require('../../assets/logosenai.png')} 
                            resizeMode="contain"
                            style={{width: '100%', height: undefined, aspectRatio: 4}} 
                                />
                            
                        </View>
                    </View>
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={user.name}
                        onChangeText={(value)=> {
                            setUser({ ...user, name: value });
                        }}
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={user.email}
                        onChangeText={(value)=> {
                            setUser({ ...user, email: value });
                        }}
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                        value={user.cpf}
                        onChangeText={(value)=> {
                            setUser({ ...user, cpf: value });
                        }}
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={user.password}
                        onChangeText={(value)=> {
                            setUser({ ...user, password: value });
                        }}
                    />
                    
                    <TouchableOpacity 
                        onPress={handleCadastro} 
                        style={styles.cadastrarButton}
                    >
                        <Text style={styles.cadastrarButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Já tem cadastro? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.loginLinkText}>Fazer login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF5F5",
    },
    header: {
        backgroundColor: "#CC1E1E",
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    cadastroCard: {
        backgroundColor: "#CC1E1E",
        width: "90%",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        width: "100%",
    },
    logoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    logoText: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
        letterSpacing: 1,
        paddingHorizontal: 10,
        textAlign: "center",
    },
    logoLines: {
        height: 30,
        justifyContent: "space-between",
    },
    logoLine: {
        width: 15,
        height: 2,
        backgroundColor: "white",
    },
    input: {
        width: "100%",
        height: 45,
        backgroundColor: "white",
        borderRadius: 25,
        marginVertical: 8,
        paddingHorizontal: 15,
    },
    cadastrarButton: {
        width: "100%",
        height: 45,
        backgroundColor: "#FF3F3F",
        borderRadius: 25,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    cadastrarButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    loginContainer: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
    },
    loginText: {
        color: "white",
        fontSize: 14,
    },
    loginLinkText: {
        color: "#FF3F3F",
        fontSize: 14,
        fontWeight: "bold",
    },
    footer: {
        backgroundColor: "#CC1E1E",
        width: "100%",
        height: 50,
    }
});