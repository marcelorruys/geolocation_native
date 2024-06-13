// src/screens/Home.js
import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, ImageBackground, Pressable } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import senai from '../../assets/senai.png';

const { width, height } = Dimensions.get('window');

const bounds = {
  northWest: { latitude: -22.913949, longitude: -47.068695 },
  northEast: { latitude: -22.913868, longitude: -47.068068 },
  southWest: { latitude: -22.914414, longitude: -47.068620 },
  southEast: { latitude: -22.914393, longitude: -47.068046 },
};

export default function Home() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [distance1, setDistance1] = useState(null);
  const [distance2, setDistance2] = useState(null);
  const [closestSensor, setClosestSensor] = useState(null);
  const navigation = useNavigation();

  const fixedPoints = [
    {
      id: 1,
      tipo: "Temperatura",
      latitude: -22.9141786,
      longitude: -47.0684443,
      localizacao: "A210",
      responsavel: "Layra e Marcela",
      temperature: 25, // Temperatura fictícia
      unit: '°C',
    },
    {
      id: 2,
      latitude: -22.9142780,
      longitude: -47.0685967,
      localizacao: "A208",
      responsavel: "Layra e Marcela",
      temperature: 26, // Temperatura fictícia
      unit: '°C',
    },
    {
      id: 3,
      latitude: -22.9142033,
      longitude: -47.0684418,
      localizacao: "A206",
      responsavel: "Layra e Marcela",
      temperature: 27, // Temperatura fictícia
      unit: '°C',
    },
    {
      id: 4,
      latitude: -22.9141931,
      longitude: -47.0684307,
      localizacao: "A204",
      responsavel: "Layra e Marcela",
      temperature: 28, // Temperatura fictícia
      unit: '°C',
    },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const locationListener = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: 60,
        distanceInterval: 0.01,
      }, (newLocation) => {
        setLocation(newLocation.coords);
      });

      return () => {
        if (locationListener) {
          locationListener.remove();
        }
      };
    })();
  }, []);

  useEffect(() => {
    if (location) {
      const distanceToFixedPoints = fixedPoints.map((point) => ({
        ...point,
        distance: haversine(location.latitude, location.longitude, point.latitude, point.longitude),
      }));

      distanceToFixedPoints.sort((a, b) => a.distance - b.distance);
      setClosestSensor(distanceToFixedPoints[0]);

      setDistance1(distanceToFixedPoints[0].distance);
      setDistance2(distanceToFixedPoints[1].distance);

      console.log('Distância para o Ponto 1:', distanceToFixedPoints[0].distance.toFixed(2), 'metros');
      console.log('Distância para o Ponto 2:', distanceToFixedPoints[1].distance.toFixed(2), 'metros');
    }
  }, [location]);

  const haversine = (lat1, lon1, lat2, lon2) => {
    const toRadians = (value) => (value * Math.PI) / 180;
    const R = 6371; // Raio da Terra em km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000; // Distância em metros
    return distance;
  };

  const handlePressDetails = () => {
    if (closestSensor) {
      navigation.navigate('Details', { sensor: closestSensor });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={senai}
        style={styles.image}
      >
        {fixedPoints.map((point, index) => (
          <View key={index} style={[styles.marker, calculatePosition(point.latitude, point.longitude)]}>
            <Text>{`${point.temperature}${point.unit}`}</Text>
          </View>
        ))}

        {location && (
          <View style={[styles.bolinha, calculatePosition(location.latitude, location.longitude)]} />
        )}
      </ImageBackground>

      <Text style={styles.textoBranco}>{errorMsg || `Latitude: ${location?.latitude}, Longitude: ${location?.longitude}`}</Text>
      {distance1 && distance2 && (
        <Text style={styles.textoBranco}>{`\t\t\t\t\t\t\t\tDistância do Ponto 1: ${distance1.toFixed(2)} metros
        Distância do Ponto 2: ${distance2.toFixed(2)} metros
        Temperatura ponto próximo: ${closestSensor?.temperature}${closestSensor?.unit}`}
        </Text>
      )}
      <Pressable
        style={({ pressed }) => [
          styles.botao,
          {
            backgroundColor: pressed ? '#6666ff' : '#80f',
          },
        ]}
        onPress={handlePressDetails}
      >
        <Text style={styles.textoBranco}>Detalhes</Text>
      </Pressable>
    </View>
  );
}

const calculatePosition = (latitude, longitude) => {
  const mapWidth = width - 40;
  const mapHeight = height / 2;

  const top = ((bounds.northWest.latitude - latitude) / (bounds.northWest.latitude - bounds.southWest.latitude)) * mapHeight;
  const left = ((longitude - bounds.southWest.longitude) / (bounds.southEast.longitude - bounds.southWest.longitude)) * mapWidth;

  return { top: top, left: left };
};
