import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import api from "../axios/axios"

export default function Home({ navigation }) {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    getSalas();
  }, []);

  const handleSalaSelect = (sala) => {
    navigation.navigate("Reserva",{sala})
  };
 
async function getSalas(){
  try {
    const response = await api.getSalas();
    console.log(response.data);
    setSalas(response.data.salas);
  } catch (error) {
    console.log(error.response.data.error);
  }
}
  return (
    <SafeAreaView style={styles.container}>
      
      

      
      <ScrollView style={styles.scrollView}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
        />
      </View>
        <View style={styles.roomsGrid}>
          {salas.map((sala) => (
            <TouchableOpacity
              key={sala.id_sala}
              style={styles.roomCard}
              onPress={() => handleSalaSelect(sala)}
            >
              <View style={styles.roomHeader}>
                <Text style={styles.roomTitle}>{sala.descricao}</Text>
              </View>
              <Text style={styles.roomTitle2}>
                {" "}
                Capacidade: {sala.capacidade}
              </Text>
              <Text style={styles.roomTitle2}> N° da sala: {sala.numero}</Text>
              <View style={styles.roomContent}>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  header: {
    flexDirection:"row",
    backgroundColor: "#CC1E1E",
    width: "100%",
    height: 60,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  icon:{
    marginLeft:10,
    marginBottom:7,
  },
  text:{
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginRight: 15,
    marginBottom:7,
  },
  searchContainer: {
    padding: 15,
    alignItems: "center",
  },
  searchInput: {
    width: "90%",
    height: 45,
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  scrollView: {
    flex: 1,
  },
  roomsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 70,
  },
  roomCard: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "48%",
    height: 130,
    marginBottom: 15,
    overflow: "hidden",
  },
  roomHeader: {
    backgroundColor: "#CC1E1E",
    padding: 8,
  },
  roomTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    padding: 2,
  },
  roomTitle2: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    padding: 2,
    
  },
  roomContent: {
    flex: 1,
    padding: 10,
  },
  footer: {
    backgroundColor: "#CC1E1E",
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
  },
});
