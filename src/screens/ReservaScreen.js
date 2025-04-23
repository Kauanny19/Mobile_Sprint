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

export default function Reserva({ route, navigation }) {
  const { sala } = route.params;
  const [horarios, setHorarios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [horarioSelecionado, setHorarioSelecionado] = useState('');

  useEffect(() => {
    getHorarios();
  });

  return(
    <View style={{paddingTop:30}}>
      <Text style={{ fontSize: 18, padding: 10 }}>
        Sala Selecionada: {sala.numero}
      </Text>
      <Text style={{ fontSize: 16, padding: 10 }}>
        Descrição: {sala.descricao}
      </Text>
      <Text style={{ fontSize: 16, padding: 10 }}>
        Capacidade: {sala.capacidade}
      </Text>
    </View>
  )
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
  footer: {
    backgroundColor: "#CC1E1E",
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
  },
});
