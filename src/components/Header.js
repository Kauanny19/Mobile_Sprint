import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Header({ header }) {
  return (
    <View>
      {header === 1 ? (
        <View style={styles.header} />
      ) : (
        <View style={styles.headerLogo}>
            <FontAwesome name="user-circle-o" size={26} color="white" style={styles.icon}/>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#CC1E1E",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  headerLogo: {
    flexDirection:"row",
    backgroundColor: "#CC1E1E",
    width: "100%",
    height: 70,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  icon:{
    marginLeft:10,
    marginBottom:7,
  },
});
