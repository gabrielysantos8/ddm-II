
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './Estilo';

export default function Musica() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.titulo}>Minha Música</Text>

      <View style={styles.capa}>
        <Ionicons
          name="musical-notes"
          size={100}
          color="#c88afc"
        />
      </View>

      <Text style={styles.nomeMusica}>
        Who’s Afraid of Little Old Me?
      </Text>

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
          <Ionicons
            name="play-skip-back"
            size={35}
            color="#ffffff"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoPlay}>
          <Ionicons
            name="play"
            size={35}
            color="#1e1b2e"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            name="play-skip-forward"
            size={35}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rodape}>
        <Ionicons
          name="heart-outline"
          size={25}
          color="#c88afc"
        />

        <Ionicons
          name="shuffle"
          size={25}
          color="#aaaaaa"
        />

        <Ionicons
          name="repeat"
          size={25}
          color="#aaaaaa"
        />
      </View>
    </View>
  );
}
