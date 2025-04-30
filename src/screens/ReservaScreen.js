import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal
} from "react-native";
import api from "../axios/axios";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Reserva({ route }) {
  const { sala } = route.params;
  const [disponiveis, setDisponiveis] = useState([]);
  const [reservados, setReservados] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [data, setData] = useState(""); // inicializa com string vazia
  const [showPicker, setShowPicker] = useState(false); // Para controlar a exibição do DateTimePicker

  useEffect(() => {
    if (data) {
      getHorarios(data);
    }
  }, [data]);

  async function getHorarios(selectedDate) {
    try {
      const res = await api.getHorarios({
        id_sala: sala.id_sala,
        data: selectedDate,
      });
      setDisponiveis(res.data.horariosDisponiveis);
      setReservados(res.data.horariosIndisponiveis);
    } catch (err) {
      Alert.alert("Erro", "Erro ao buscar horários");
    }
  }

  async function abrirModal(horario) {
    setHorarioSelecionado(horario);
    setModalVisible(true);
  }

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowPicker(false);
    setData(currentDate.toISOString().split("T")[0]); // Converte para o formato "YYYY-MM-DD"
  };

  async function confirmarReserva() {
  try {
    const inicio = horarioSelecionado.inicio;
    const fim = horarioSelecionado.fim;
    

    await api.confirmarReserva({
      id_usuario: 1,
      fk_id_sala: sala.id_sala,
      data: data,
      horarioInicio: inicio,
      horarioFim: fim
    });

    setModalVisible(false);
    Alert.alert("Sucesso", "Reserva confirmada!");
    getHorarios(data); // Atualiza horários após reservar
  } catch (err) {
    Alert.alert("Erro", err.response?.data?.error || "Erro ao reservar");
    console.log(err);
  }
}

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ paddingTop: 30, paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Sala: {sala.numero} - {sala.descricao}
          </Text>
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Selecione a data:</Text>
          <TouchableOpacity
            style={{ width: 200, marginTop: 10, padding: 10, backgroundColor: '#ccc', borderRadius: 5 }}
            onPress={() => setShowPicker(true)}
          >
            <Text>{data || "Selecione a data"}</Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              value={data ? new Date(data) : new Date()}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
           {disponiveis.map((horario) => (
            <TouchableOpacity
              key={`disp-${horario.inicio}-${horario.fim}`}
              style={styles.horarioDisponivel}
              onPress={() => abrirModal(horario)}
            >
              <Text style={{ color: "white" }}>
                {horario.inicio} - {horario.fim}
              </Text>
            </TouchableOpacity>
          ))}
          {reservados.map((horario) => (
            <TouchableOpacity 
              key={`res-${horario.inicio}-${horario.fim}`}
              style={styles.horarioReservado}
              onPress={() => abrirModal(horario)}
            >
              <Text style={{ color: "white" }}>
                {horario.inicio} - {horario.fim}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Modal
        visible={modalVisible}
        onRequestClose={()=> setModalVisible(false)}
        animationType="slide"
        >
          <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Text style={styles.modalTitle}>Confirmar Reserva</Text>
          <Text>Sala: {sala.numero} - {sala.descricao} </Text>
          <Text>Data: {data}</Text>
          <Text>Horário: {horarioSelecionado?.inicio} - {horarioSelecionado?.fim}</Text>

          <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelar}>
              <Text style={{ color: "white" }}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmarReserva} style={styles.confirmar}>
              <Text style={{ color: "white" }}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  horarioReservado: {
    backgroundColor: "red",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  horarioDisponivel: {
    backgroundColor: "green",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center"
  },
  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    alignItems: "center"
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold"
  },
  cancelar: {
    backgroundColor: "#888",
    padding: 10,
    borderRadius: 5
  },
  confirmar: {
    backgroundColor: "#CC1E1E",
    padding: 10,
    borderRadius: 5
  }
});
