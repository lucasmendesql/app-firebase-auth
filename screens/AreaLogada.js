import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { auth } from "../firebaseConfig.js";
import { signOut } from "firebase/auth";
import { useState } from "react";

const AreaLogada = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const Logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        navigation.navigate("Inicial");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.topo}>
        <Text style={estilos.bemVindo}>Bem-vindo(a)</Text>

        <Pressable
          style={loading ? estilos.botoesDesabilitado : estilos.botoes}
          onPress={Logout}
          disabled={loading}
        >
          <Text style={estilos.titulo}>Logout</Text>
        </Pressable>

        {loading && <ActivityIndicator size="small" color="red" />}
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
  botoesDesabilitado: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 8,
    padding: 8,
    width: "100%",
    borderRadius: 4,
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
