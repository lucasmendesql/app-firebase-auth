import { Pressable, StyleSheet, Text, View } from "react-native";
import { auth } from "../firebaseConfig.js";
import { signOut } from "firebase/auth";

const AreaLogada = ({ navigation }) => {
  const Logout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Inicial");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.topo}>
        <Text style={estilos.bemVindo}>Bem-vindo(a)</Text>
        <Pressable style={estilos.botoes} onPress={Logout}>
          <Text style={estilos.titulo}>Logout</Text>
        </Pressable>
      </View>
      <View style={estilos.geral}>
        <Text>Você está na área logada.</Text>
      </View>
    </View>
  );
};

export default AreaLogada;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF3CF",
    padding: 16,
  },
  topo: {
    marginVertical: 32,
  },
  bemVindo: {
    fontSize: 24,
    marginVertical: 16,
  },
  botoes: {
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 8,
    padding: 8,
    width: "100%",
    borderRadius: 4,
  },
  titulo: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
