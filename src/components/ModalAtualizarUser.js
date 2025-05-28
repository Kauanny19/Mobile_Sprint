import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import api from "../services/axios";

const ModalAtualizarUser = ({ visible, onClose, usuario, onSuccess }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    if (usuario) {
      setNome(usuario.nome || "");
      setEmail(usuario.email || "");
      setSenha(usuario.senha || "");
    }
  }, [usuario]);

  const handleAtualizar = async () => {
    try {
      const dadosAtualizados = {
        nome,
        email,
        senha,
      };

      const response = await api.updateUser(usuario.id_usuario, dadosAtualizados);

      console.log(response.data.message);

      if (onSuccess) onSuccess(); 

      onClose();
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  if (!usuario) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Atualizar Dados do Usuário</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            keyboardType="password"
          />

          <View style={styles.actions}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAtualizar}>
              <Text style={styles.buttonText}>Atualizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.6)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      backgroundColor: "#B11010",
      width: "85%",
      padding: 20,
      borderRadius: 15,
      alignItems: "center",
    },
    title: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 20,
    },
    label: {
      alignSelf: "flex-start",
      color: "#fff",
      fontSize: 14,
      marginBottom: 5,
      marginTop: 10,
    },
    input: {
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 8,
      fontSize: 14,
      marginBottom: 5,
      color: "#000",
    },
    button: {
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 10,
      marginTop: 20,
    },
    buttonText: {
      color: "#B11010",
      fontWeight: "bold",
      fontSize: 16,
    },
    cancelButton: {
      marginTop: 10,
    },
    cancelButtonText: {
      color: "#fff",
      fontSize: 14,
      textDecorationLine: "underline",
    },
  });
  

export default ModalAtualizarUser;
