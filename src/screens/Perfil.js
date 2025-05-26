//botar a imagem d avatar no assets para ser importada aqui (linha 21, )

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import imgPerfil from "../../assets/imgPerfil.png";

const Perfil = () => {
  return (
    <View style={styles.content}>
      <View style={styles.perfilCard}>
        <View style={styles.imgPerfilContainer}>
                  <Image
                    source={imgPerfil}
                    resizeMode="contain"
                    style={{ width: "100%", height: undefined, aspectRatio: 4 }}
                  />
                </View>
        <View style={styles.perfilContainer}>
          <TextInput>oi</TextInput>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  perfilCard: {
    backgroundColor: "#CC1E1E",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  perfilContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imgPerfilContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});

export default Perfil;