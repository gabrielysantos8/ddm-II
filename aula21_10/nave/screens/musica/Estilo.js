
import { StyleSheet } from 'react-native';

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

export default styles;
