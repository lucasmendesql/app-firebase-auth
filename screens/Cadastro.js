import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import { auth } from "../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const Loading = () => {
    return (
      <View style={estilos.viewLoading}>
        <ActivityIndicator size="large" color="#5451a6" />
      </View>
    );
  };

  const cadastrar = () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Você deve preencher os campos e-mail e senha");
      return;
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        Alert.alert("conta criada com sucesso!", "Deseja entrar?", [
          {
            text: "Sim, bora lá",
            onPress: () => {
              return navigation.replace("AreaLogada");
            },
            style: "cancel",
          },

          {
            text: "Não, me deixe aqui mesmo",
            onPress: () => {
              return false;
            },
            style: "destructive",
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
        let mensagem;
        switch (error.code) {
          case "auth/email-already-in-use":
            mensagem = "E-mail já cadastrado!";
            break;
          case "auth/weak-password":
            mensagem = "Senha deve ter pelo menos 6 digitos";
          case "auth/invalid-email":
            mensagem = "Endereço de e-mail inválido!";
            break;
          default:
            mensagem = "Algo deu errado... tente novamente!";
            break;
        }
        Alert.alert("Atenção!", mensagem);
      })
      .finally(() => setLoading(false));
  };
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
          <Pressable
            style={loading ? estilos.botoesDesabilitado : estilos.botoes}
            onPress={cadastrar}
            disabled={loading}
          >
            <Text style={estilos.titulo}>Cadastre-se</Text>
          </Pressable>
        </View>
        {loading && <ActivityIndicator size="small" color="red" />}
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
  botoesDesabilitado: {
    backgroundColor: "#ccc",
    marginVertical: 8,
    padding: 2,
    width: "100%",
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
