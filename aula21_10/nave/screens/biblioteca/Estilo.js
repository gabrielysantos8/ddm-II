import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#1e1b2e',
    },

    scroll: {
    flex: 1,
    },

    conteudo: {
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 25,
    },

    titulo: {
    color: '#ffffff',
    fontSize: 23,
    fontWeight: 'bold',
    flexShrink: 1,
    },

    tituloSecao: {
        color: '#fff'
    },

    cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10
    },

  cardFavoritos: {
    backgroundColor: '#302744',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#403451',
  },

  iconeFavoritos: {
    width: 60,
    height: 60,
    backgroundColor: '#252037',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoFavoritos: {
    flex: 1,
    marginLeft: 14,
    marginRight: 8,
  },

  cabecalhoSecao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 5,
    gap: 10,
  },

  gradePlaylists: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 28,
  },

  cardPlaylistBiblioteca: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#302744',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#403451',
  },

  capaPlaylist: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#252037',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  nomePlaylist: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  descricaoPlaylist: {
    color: '#c5bbd1',
    fontSize: 12,
  },

  contador: {
    color: '#c5bbd1',
    fontSize: 12,
  },

  itemMusica: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#302744',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#403451',
    gap: 12,
  },

  iconeMusica: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#252037',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoMusica: {
    flex: 1,
    minWidth: 0,
  },

  nomeMusica: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  artista: {
    color: '#c5bbd1',
    fontSize: 12,
  },

    navegacao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#252037',
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: '#403451',
  },

  itemNav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 4,
  },

  textoNav: {
    color: '#c5bbd1',
    fontSize: 11,
    textAlign: 'center',
  },

  textoNavAtivo: {
    color: '#c88afc',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },



});

export default styles;