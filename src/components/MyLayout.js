import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
  Image,
} from "react-native";

export default function MyLayout({ children }) {
    return (

      <View style={styles.container}>

        {/* Cabeçalho */}
        <View style={styles.header} />

        <View style={styles.container}>{children}</View>
  
        {/* Rodapé */}
        <View style={styles.footer} />

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "#CC1E1E",
      width: "100%",
      height: 50,
      alignItems: "center",
      justifyContent: "center"
    },
    container: {
      flex: 1,
      backgroundColor: "#FFF5F5",
    },
    footer: {
      backgroundColor: "#CC1E1E",
      width: "100%",
      height: 50
    }
  });
  