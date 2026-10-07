import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="light" />

      <Text style={styles.titulo}>Minha Música</Text>

      <View style={styles.capa}>
        <Ionicons name="musical-notes" size={100} color="#c88afc" />
      </View>

      <Text style={styles.nomeMusica}>Who’s Afraid of Little Old Me?</Text>
      <Text style={styles.artista}>Taylor Swift</Text>

      <View style={styles.barraContainer}>
        <View style={styles.barraFundo}>
          <View style={styles.barraProgresso} />
        </View>

        <View style={styles.tempo}>
          <Text style={styles.tempoTexto}>3:13</Text>
          <Text style={styles.tempoTexto}>5:39</Text>
        </View>
      </View>

      <View style={styles.controles}>

        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={35} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoPlay}>
          <Ionicons name="play" size={35} color="#1e1b2e" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={35} color="#ffffff" />
        </TouchableOpacity>

      </View>

      <View style={styles.rodape}>
        <Ionicons name="heart-outline" size={25} color="#c88afc" />
        <Ionicons name="shuffle" size={25} color="#aaaaaa" />
        <Ionicons name="repeat" size={25} color="#aaaaaa" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1e1b2e',
    alignItems: 'center',
    padding: 25,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 35,
    marginBottom: 35,
  },

  capa: {
    width: 280,
    height: 280,
    backgroundColor: '#302744',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 10,
  },

  nomeMusica: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  artista: {
    color: '#aaa0b8',
    fontSize: 17,
    marginBottom: 30,
  },

  barraContainer: {
    width: '90%',
  },

  barraFundo: {
    height: 5,
    backgroundColor: '#51475f',
    borderRadius: 5,
    overflow: 'hidden',
  },

  barraProgresso: {
    width: '52%',
    height: 5,
    backgroundColor: '#c88afc',
  },

  tempo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },

  tempoTexto: {
    color: '#999',
    fontSize: 12,
  },

  controles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 220,
    marginTop: 35,
  },

  botaoPlay: {
    width: 70,
    height: 70,
    backgroundColor: '#c88afc',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rodape: {
    flexDirection: 'row',
    gap: 45,
    marginTop: 40,
  },

});