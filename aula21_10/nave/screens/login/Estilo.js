
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#1e1b2e',
  },

  logo: {
    width: 120,
    height: 120,
    backgroundColor: '#302744',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 25,
    elevation: 10,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#ffffff',
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#aaa0b8',
  },

  formulario: {
    width: '100%',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },

  inputContainer: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#302744',
    borderWidth: 1,
    borderColor: '#51475f',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 25,
    gap: 12,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#ffffff',
    fontSize: 15,
  },

  botao: {
    height: 58,
    backgroundColor: '#c88afc',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 10,
  },

  textoBotao: {
    color: '#1e1b2e',
    fontSize: 18,
    fontWeight: 'bold',
  },

  rodape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 45,
  },

  textoRodape: {
    color: '#aaa0b8',
    fontSize: 13,
  },

});

export default styles;
