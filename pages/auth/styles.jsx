import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#111',
      justifyContent:'center',
      alignItems:'center'
    },
  
    titulo:{
      color:'#80f', 
      fontWeight:'bold',
      fontSize:30,
    },
  
    login: {
      width: 50,
      height: 50,
    },
  
    input: {
      marginTop: 30,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3
    },
  
    botao:{
      backgroundColor: '#80f',
      marginTop:20,
      width:"40%",
      alignItems:"center",
      borderRadius:10
    },
  
    texto: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#fff"
    }
  
  })

export default styles
