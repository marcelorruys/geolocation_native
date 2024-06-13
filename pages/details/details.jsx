// src/screens/Details.js
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Details({ route }) {
  const { sensor } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Sensor</Text>
      <Image style={styles.image} source={require("../../assets/sensor.png")} />
      <Text style={styles.text}>Localização: {sensor.localizacao}</Text>
      <Text style={styles.text}>Responsável: {sensor.responsavel}</Text>
      <Text style={styles.text}>
        Temperatura: {sensor.temperature}
        {sensor.unit}
      </Text>
    </View>
  );
}
