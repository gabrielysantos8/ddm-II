
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './Estilo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

    <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
    >

        {/* Cabeçalho */}
        <View style={styles.cabecalho}>
          <View>
            <Text style={styles.subtitulo}>BEM-VINDO(A) 🎧</Text>
            <Text style={styles.titulo}>Olá, amante da música!</Text>
          </View>

          <TouchableOpacity style={styles.botaoPerfil}>
            <Ionicons
              name="person"
              size={25}
              color="#c88afc"
            />
          </TouchableOpacity>
        </View>

        {/* Destaque */}
        <Text style={styles.tituloSecao}>Seu momento musical</Text>

        <TouchableOpacity
          style={styles.destaque}
          onPress={() => navigation.navigate('Musica')}
        >
          <View style={styles.iconeDestaque}>
            <Ionicons
              name="musical-notes"
              size={55}
              color="#c88afc"
            />
          </View>

          <View style={styles.infoDestaque}>
            <Text style={styles.textoPequeno}>OUÇA AGORA</Text>

            <Text style={styles.nomeDestaque}>
              Who’s Afraid of Little Old Me?
            </Text>

            <Text style={styles.artistaDestaque}>
              Taylor Swift
            </Text>

            <View style={styles.botaoOuvir}>
              <Ionicons
                name="play"
                size={30}
                color="#403451"
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Músicas populares */}
        <View style={styles.cabecalhoSecao}>
          <Text style={styles.tituloSecao}>Para ouvir hoje</Text>
        </View>

          <ScrollView
            horizontal
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={styles.listaHorizontal}
            contentContainerStyle={styles.conteudoMusicas}
          >
            
          <TouchableOpacity
            style={styles.cardMusica}
            onPress={() => navigation.navigate('Musica')}
          >
            <View style={styles.capaMusica}>
              <Ionicons
                name="moon"
                size={55}
                color="#c88afc"
              />
            </View>

            <Text style={styles.nomeMusica}>Put the Record On</Text>
            <Text style={styles.artista}>Kylie Cantrall</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardMusica}
            onPress={() => navigation.navigate('Musica')}
          >
            <View style={styles.capaMusica}>
              <Ionicons
                name="sparkles"
                size={55}
                color="#c88afc"
              />
            </View>

            <Text style={styles.nomeMusica}>Silent Treatment</Text>
            <Text style={styles.artista}>Freya Skye</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Playlists */}
        <View style={styles.cabecalhoSecao}>
          <Text style={styles.tituloSecao}>Suas playlists</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Biblioteca')}
          >
            <Text style={styles.verTodos}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.cardPlaylist}
          onPress={() => navigation.navigate('Biblioteca')}
        >
          <View style={styles.iconePlaylist}>
            <Ionicons
              name="heart"
              size={30}
              color="#c88afc"
            />
          </View>

          <View style={styles.infoPlaylist}>
            <Text style={styles.nomePlaylist}>Músicas favoritas</Text>
            <Text style={styles.descricaoPlaylist}>
              Suas músicas preferidas em um só lugar
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color="#aaa0b8"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardPlaylist}
          onPress={() => navigation.navigate('Biblioteca')}
        >
          <View style={styles.iconePlaylist}>
            <Ionicons
              name="headset"
              size={30}
              color="#c88afc"
            />
          </View>

          <View style={styles.infoPlaylist}>
            <Text style={styles.nomePlaylist}>Minha coleção</Text>
            <Text style={styles.descricaoPlaylist}>
              Explore sua biblioteca musical
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color="#aaa0b8"
          />
        </TouchableOpacity>

      </ScrollView>

      {/* Navegação inferior */}
      <View style={styles.navegacao}>

        <TouchableOpacity style={styles.itemNav}>
          <Ionicons name="home" size={25} color="#c88afc" />
          <Text style={styles.textoNavAtivo}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemNav}
          onPress={() => navigation.navigate('Biblioteca')}
        >
          <Ionicons
            name="library-outline"
            size={25}
            color="#aaa0b8"
          />
          <Text style={styles.textoNav}>Biblioteca</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemNav}
          onPress={() => navigation.navigate('Musica')}
        >
          <Ionicons
            name="play-circle-outline"
            size={25}
            color="#aaa0b8"
          />
          <Text style={styles.textoNav}>Tocando</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
