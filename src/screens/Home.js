import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import api from "../axios/axios"
import Logo from "../../assets/logosenai.png";

export default function Home({ navigation }) {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    getSalas();
  }, []);

 
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
      
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={Logo}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
        />
      </View>

      
      <ScrollView style={styles.scrollView}>
        <View style={styles.roomsGrid}>
          {salas.map((sala) => (
            <TouchableOpacity
              key={sala.id_sala}
              style={styles.roomCard}
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
      

      {/* Footer */}
      <View style={styles.footer} />
    </SafeAreaView>
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
  logo: {
    width: 120,
    height: 30,
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
