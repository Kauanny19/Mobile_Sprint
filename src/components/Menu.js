import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu({ visible, onClose }) {
  const navigation = useNavigation();

  const handleNavigate = (screen) => {
    onClose();
    navigation.navigate(screen);
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => handleNavigate('Home')}>
            <Text style={styles.item}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('MinhasReservas')}>
            <Text style={styles.item}>Minhas Reservas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('Perfil')}>
            <Text style={styles.item}>Perfil</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.closeArea} onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  menu: {
    width: 250,
    backgroundColor: '#CC1E1E',
    paddingTop: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    zIndex: 2,
  },
  closeArea: {
    flex: 1,
    top: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  item: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    paddingVertical: 10,
  },
});