
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1e1b2e',
  },

  conteudoMusica: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 5,
    paddingBottom: 10,
  },

  botaoVoltar: {
    alignSelf: 'flex-start',
    marginTop: 5,
    padding: 8,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 20,
  },

  capa: {
    width: '100%',
    maxWidth: 280,
    aspectRatio: 1,
    backgroundColor: '#302744',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
    elevation: 10,
  },

  nomeMusica: {
    color: '#ffffff',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },

  artista: {
    color: '#c5bbd1',
    fontSize: 16,
    marginBottom: 22,
  },

  barraContainer: {
    width: '100%',
    maxWidth: 320,
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
    color: '#c5bbd1',
    fontSize: 12,
  },

  controles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 220,
    maxWidth: '85%',
    marginTop: 25,
  },

  botaoPlay: {
    width: 65,
    height: 65,
    backgroundColor: '#c88afc',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 220,
    maxWidth: '85%',
    marginTop: 22,
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
