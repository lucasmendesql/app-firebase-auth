import { Pressable, StyleSheet, Text, View } from "react-native";

const Inicial = ({ navigation }) => {
  return (
    <View style={estilos.container}>
      <View style={estilos.introducao}>
        <Text style={estilos.titulo}>App Auth</Text>
        <Text style={estilos.subtitulo}>Autenticação com Firebase</Text>
      </View>

      <View style={estilos.Viewbotao}>
        <Pressable
          style={estilos.botoes}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={estilos.titulo}>Entre</Text>
        </Pressable>

        <Pressable
          style={estilos.botoess}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={estilos.titulo}>Cadastre-se</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Inicial;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  introducao: {
    backgroundColor: "#4A235A",
    width: "100%",
    padding: 8,
    borderRadius: 4,
  },
  titulo: {
    textAlign: "center",
    fontSize: 32,
    color: "white",
  },
  subtitulo: {
    textAlign: "center",
    color: "white",
  },
  Viewbotao: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botoes: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 8,
    padding: 8,
    width: "47%",
    margin: 10,
    borderRadius: 4,
  },

  botoess: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 8,
    padding: 8,
    width: "47%",
    margin: 10,
    borderRadius: 4,
  },
  titulo: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
