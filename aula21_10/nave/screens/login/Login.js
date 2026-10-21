
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './Estilo';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Ionicons
          name="musical-notes"
          size={65}
          color="#c88afc"
        />
      </View>

      <Text style={styles.titulo}>Bem-vindo!</Text>

      <Text style={styles.subtitulo}>
        Sua música, seu momento.
      </Text>

      <View style={styles.formulario}>

        <Text style={styles.label}>E-mail</Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={22}
            color="#c88afc"
          />

          <TextInput
            nativeID="email"
            placeholder="Digite seu e-mail"
            placeholderTextColor="#aaa0b8"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Senha</Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#c88afc"
          />

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#aaa0b8"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotao}>Entrar</Text>

          <Ionicons
            name="arrow-forward"
            size={22}
            color="#1e1b2e"
          />
        </TouchableOpacity>

      </View>

      <View style={styles.rodape}>
        <Ionicons
          name="headset-outline"
          size={18}
          color="#aaa0b8"
        />

        <Text style={styles.textoRodape}>
          Sua trilha sonora começa aqui
        </Text>
      </View>

    </View>
  );
}
