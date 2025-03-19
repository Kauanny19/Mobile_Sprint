import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  Image 
} from 'react-native';

const initialRooms = [
  {name: 'Conversores', capacity: 16, number: "A1"},
  {name: "Eletrônica" , capacity: 16, number: "A2" },
  {name: "CLP" , capacity: 16, number: "A3" },
  {name: "Automação", capacity: 20, number: "A4" },
  {name: "Metrologia", capacity: 16, number: "A5" },
  {name: "Pneumática/Hidráulica", capacity: 20, number: "A6" },
  {name: "Oficina de comandos elétricos", capacity: 16, number: "COEL" },
  {name: "Oficina de instalações elétricas - G1", capacity: 16, number: "ITEL1" },
  {name: "Oficina de instalações elétricas - G2", capacity: 16, number: "ITEL2" },
  {name: "Oficina de tornearia", capacity: 20, number: "TOR" },
  {name: "Oficina de ajustagem/Fresagem", capacity: 16, number: "AJFR" },
  {name: 'OFICINA DE CNC', capacity: 16, number: "CNC"},
  {name: 'OFICINA DE MANUTENÇÃO MECÂNICA', capacity: 16, number: "MMC"},
  {name: 'OFICINA DE SOLDAGEM', capacity: 16, number: "SOLD"},
  {name: 'SALA DE AULA', capacity: 32, number: "B2"},
  {name: 'SALA DE AULA', capacity: 32, number: "B3"},
  {name: 'SALA DE AULA', capacity: 40, number: "B5"},
  {name: 'SALA DE AULA', capacity: 32, number: "B6"},
  {name: 'SALA DE AULA', capacity: 32, number: "B7"},
  {name: 'LAB. INFORMÁTICA', capacity: 20, number: "B8"},
  {name: 'LAB. INFORMÁTICA', capacity: 16, number: "B9"},
  {name: 'LAB. INFORMÁTICA', capacity: 16, number: "B10"},
  {name: 'LAB. INFORMÁTICA', capacity: 40, number: "B11"},
  {name: 'LAB. INFORMÁTICA', capacity: 40, number: "B12"},
  {name: 'LAB. ALIMENTOS', capacity: 16, number: "ALI"},
  {name: 'SALA DE AULA', capacity: 24, number: "C1"},
  {name: 'LAB. DE INFORMÁTICA', capacity: 32, number: "C2"},
  {name: 'SALA DE MODELAGEM VESTUÁRIO', capacity: 20, number: "C3"},
  {name: 'SALA DE MODELAGEM VESTUÁRIO', capacity: 20, number: "C4"},
  {name: 'SALA DE AULA', capacity: 16, number: "C5"},
  {name: 'OFICINA DE VESTUÁRIO', capacity: 20, number: "VEST"},
  {name: 'OFICINA DE MANUTENÇÃO PESPONTO', capacity: 16, number: "MPESP"},
  {name: 'OFICINA DE MANUTENÇÃO AUTOMOTIVA', capacity: 20, number: "AUTO"},
  {name: 'SALA MODELAGEM', capacity: 16, number: "D1"},
  {name: 'SALA DE MODELAGEM', capacity: 20, number: "D2"},
  {name: 'SALA DE AULA', capacity: 16, number: "D3"},
  {name: 'SALA DE CRIAÇÃO', capacity: 18, number: "D4"},
  {name: 'OFICINA DE CORTE - G1', capacity: 16, number: "CORT1"},
  {name: 'OFICINA DE CORTE - G2', capacity: 16, number: "CORT2"},
  {name: 'OFICINA DE PREPARAÇÃO', capacity: 16, number: "PRE"},
  {name: 'OFICINA DE PESPONTO - G1', capacity: 16, number: "PESP1"},
  {name: 'OFICINA DE PESPONTO - G2', capacity: 16, number: "PESP2"},
  {name: 'OFICINA DE PESPONTO - G3', capacity: 16, number: "PESP3"},
  {name: 'OFICINA DE MONTAGEM - G1', capacity: 16, number: "MONT1"},
  {name: 'OFICINA DE MONTAGEM - G2', capacity: 16, number: "MONT2"}
];


export default function Homepage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [rooms, setRooms] = useState(initialRooms);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setRooms(initialRooms);
    } else {
      const filteredRooms = initialRooms.filter(room => 
        room.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setRooms(filteredRooms);
    }
  }, [searchQuery]);

  const handleRoomSelect = (room) => {
    console.log(`Selected room: ${room.name}`);
    alert(`Sala selecionada: ${room.name}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/logosenai.png')} 
          resizeMode="contain"
          style={styles.logo} 
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar sala de aula"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Rooms Grid */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.roomsGrid}>
          {rooms.map(room => (
            <TouchableOpacity 
              key={room.id} 
              style={styles.roomCard}
              onPress={() => handleRoomSelect(room)}
            >
              <View style={styles.roomHeader}>
                <Text style={styles.roomTitle}>{room.name}</Text>
              </View>
                <Text style={styles.roomTitle2}> Capacidade: {room.capacity}</Text>
                <Text style={styles.roomTitle2}> N° da sala: {room.number}</Text>
              <View style={styles.roomContent}>
                {/* Room content can be added here */}
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
    paddingBottom: 70, // Extra space at bottom for footer
  },
  roomCard: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "48%", // Just under 50% to allow for spacing
    height: 120,
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
  }
});