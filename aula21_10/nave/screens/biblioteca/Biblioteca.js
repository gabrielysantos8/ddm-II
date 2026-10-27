
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './Estilo';

export default function Biblioteca({ navigation }) {
  const musicas = [
    {
      id: '1',
      nome: 'pretty isn’t pretty',
      artista: 'Olivia Rodrigo',
      icone: 'musical-notes',
    },
    {
      id: '2',
      nome: 'Midnight Rain',
      artista: 'Taylor Swift',
      icone: 'moon',
    },
    {
      id: '3',
      nome: 'Risk',
      artista: 'Gracie Abrams',
      icone: 'heart',
    },
    {
      id: '4',
      nome: 'Enchanted',
      artista: 'Taylor Swift',
      icone: 'sparkles',
    },
  ];

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
            <Text style={styles.titulo}>Biblioteca</Text>
          </View>

          <View style={styles.botaoPerfil}>
            <Ionicons
              name="library"
              size={25}
              color="#c88afc"
            />
          </View>
        </View>

        {/* Favoritos */}
        <TouchableOpacity
          style={styles.cardFavoritos}
          onPress={() => navigation.navigate('Musica')}
        >
          <View style={styles.iconeFavoritos}>
            <Ionicons
              name="heart"
              size={35}
              color="#c88afc"
            />
          </View>

          <View style={styles.infoFavoritos}>
            <Text style={styles.nomePlaylist}>
              Músicas favoritas
            </Text>

            <Text style={styles.descricaoPlaylist}>
              Suas músicas preferidas
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color="#c5bbd1"
          />
        </TouchableOpacity>

        {/* Playlists */}
        <View style={styles.cabecalhoSecao}>
          <Text style={styles.tituloSecao}>Suas playlists</Text>

          <Ionicons
            name="albums-outline"
            size={23}
            color="#c88afc"
          />
        </View>

        <View style={styles.gradePlaylists}>

          <TouchableOpacity
            style={styles.cardPlaylistBiblioteca}
            onPress={() => navigation.navigate('Musica')}
          >
            <View style={styles.capaPlaylist}>
              <Ionicons
                name="moon"
                size={42}
                color="#c88afc"
              />
            </View>

            <Text style={styles.nomePlaylist}>
              Noite tranquila
            </Text>

            <Text style={styles.descricaoPlaylist}>
              Para relaxar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardPlaylistBiblioteca}
            onPress={() => navigation.navigate('Musica')}
          >
            <View style={styles.capaPlaylist}>
              <Ionicons
                name="headset"
                size={42}
                color="#c88afc"
              />
            </View>

            <Text style={styles.nomePlaylist}>
              Repetir sempre
            </Text>

            <Text style={styles.descricaoPlaylist}>
              As mais ouvidas
            </Text>
          </TouchableOpacity>

        </View>

        {/* Lista de músicas */}
        <View style={styles.cabecalhoSecao}>
          <Text style={styles.tituloSecao}>Todas as músicas</Text>

          <Text style={styles.contador}>
            {musicas.length} músicas
          </Text>
        </View>

        {musicas.map((musica) => (
          <TouchableOpacity
            key={musica.id}
            style={styles.itemMusica}
            onPress={() => navigation.navigate('Musica')}
          >
            <View style={styles.iconeMusica}>
              <Ionicons
                name={musica.icone}
                size={25}
                color="#c88afc"
              />
            </View>

            <View style={styles.infoMusica}>
              <Text
                style={styles.nomeMusica}
                numberOfLines={1}
              >
                {musica.nome}
              </Text>

              <Text style={styles.artista}>
                {musica.artista}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Musica')}
              hitSlop={10}
            >
              <Ionicons
                name="play-circle"
                size={30}
                color="#c88afc"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}

      </ScrollView>

      {/* Navegação inferior */}
      <View style={styles.navegacao}>

        <TouchableOpacity
          style={styles.itemNav}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons
            name="home-outline"
            size={25}
            color="#aaa0b8"
          />

          <Text style={styles.textoNav}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemNav}>
          <Ionicons
            name="library"
            size={25}
            color="#c88afc"
          />

          <Text style={styles.textoNavAtivo}>Biblioteca</Text>
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
