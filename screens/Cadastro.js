import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";

const Cadastro = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.formulario}>
        <TextInput
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-adress"
          onChangeText={(valor) => setEmail(valor)}
        />

        <TextInput
          placeholder="Senha"
          style={estilos.input}
          secureTextEntry
          onChangeText={(valor) => setSenha(valor)}
        />

        <View style={estilos.botoes}>
          <Pressable style={estilos.botoes} onPress={cadastrar}>
            <Text style={estilos.titulo}>Cadastre-se</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Cadastro;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginVertical: 16,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },
  botoes: {
    backgroundColor: "blue",
    marginVertical: 8,
    padding: 2,
    width: "100%",
    borderRadius: 4,
  },
  titulo: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
