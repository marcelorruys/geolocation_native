import { StyleSheet, Dimensions} from "react-native-web";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#111',
  },
  map: {
    position: 'absolute',
    width: width - 40,
    height: height / 2,
    borderRadius: 10,
  },
  bolinha: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  balaoContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  textoBalao: {
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: 390,
    height: 600,
  },
  textoBranco: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botao:{
    backgroundColor: '#80f',
    marginTop:20,
    width:"40%",
    alignItems:"center",
    borderRadius:10
  }
});

export default styles;