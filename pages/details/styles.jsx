import { StyleSheet, Dimensions } from "react-native-web";

// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'#111',
//   },
//   map: {
//     position: 'absolute',
//     width: width - 40,
//     height: height / 2,
//     borderRadius: 10,
//   },
//   bolinha: {
//     position: 'absolute',
//     width: 20,
//     height: 20,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     transform: [{ translateX: -10 }, { translateY: -10 }],
//   },
//   balaoContainer: {
//     backgroundColor: 'white',
//     padding: 5,
//     borderRadius: 5,
//     borderColor: 'black',
//     borderWidth: 1,
//   },
//   textoBalao: {
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   image: {
//     width: 390,
//     height: 600,
//   },
//   textoBranco: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#80f",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 5,
  },
});

export default styles;
