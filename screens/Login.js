import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
/* Importamos os recursos de autentificação através das configurações firebase */
import { auth } from "../firebaseConfig.js";
/* Importamos as funções de autentificação diretamente da lib */
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Você deve preencher todos os campos");
      return;
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigation.navigate("AreaLogada");
      })
      .catch((error) => {
        console.log(error);
        let mensagem;
        switch (error.code) {
          case "auth/user-not-found":
            mensagem = "Usuário não encontrado!";
            break;

          case "auth/wrong-password":
            mensagem = "Senha incorreta!";
            break;
          default:
            mensagem = "Houve um erro, tente novamente mais tarde";
            break;
        }
        Alert.alert("Ops!", mensagem);
      });
  };
  const recuperarSenha = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Recuperar senha", "Verifique sua caixa de entrada");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.formulario}>
        <TextInput
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-address"
          onChangeText={(valor) => setEmail(valor)}
        />
        <TextInput
          placeholder="Senha"
          style={estilos.input}
          secureTextEntry
          onChangeText={(valor) => setSenha(valor)}
        />
        <View style={estilos.Viewbotao}>
          <Pressable style={estilos.botoes} onPress={login}>
            <Text style={estilos.titulo}>Entre</Text>
          </Pressable>

          <Pressable style={estilos.botoess} onPress={recuperarSenha}>
            <Text style={estilos.titulo}>Recuperar senha</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginBottom: 32,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },

  Viewbotao: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  botoes: {
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 8,
    padding: 8,
    width: "47%",
    borderRadius: 4,
  },

  botoess: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 8,
    padding: 8,
    width: "47%",
    borderRadius: 4,
  },
  titulo: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
