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

cabecalho: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 25,
  marginBottom: 28,
  gap: 12,
},

titulo: {
  color: '#ffffff',
  fontSize: 23,
  fontWeight: 'bold',
  flexShrink: 1,
},

subtitulo: {
  color: '#c88afc',
  fontSize: 12,
  fontWeight: 'bold',
  letterSpacing: 1.2,
  marginBottom: 8,
},

destaque: {
  backgroundColor: '#302744',
  borderRadius: 20,
  padding: 16,
  marginBottom: 28,
  borderWidth: 1,
  borderColor: '#403451',
},

iconeDestaque: {
  minHeight: 120,
  backgroundColor: '#252037',
  borderRadius: 15,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 16,
},

nomeDestaque: {
  color: '#ffffff',
  fontSize: 20,
  fontWeight: 'bold',
  flexShrink: 1,
},

artistaDestaque: {
  color: '#c5bbd1',
  fontSize: 15,
},

tituloSecao: {
  color: '#ffffff',
  fontSize: 19,
  fontWeight: 'bold',
  marginBottom: 16,
},

listaHorizontal: {
  marginBottom: 28,
},

cardMusica: {
  width: 140,
  marginRight: 14,
},

capaMusica: {
  width: '100%',
  aspectRatio: 1,
  borderRadius: 16,
  backgroundColor: '#302744',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
},

nomeMusica: {
  color: '#ffffff',
  fontSize: 14,
  fontWeight: 'bold',
  marginBottom: 5,
},

artista: {
  color: '#c5bbd1',
  fontSize: 13,
},

cardPlaylist: {
  backgroundColor: '#302744',
  borderRadius: 15,
  padding: 13,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 12,
  borderWidth: 1,
  borderColor: '#403451',
},

infoPlaylist: {
  flex: 1,
  minWidth: 0,
  marginLeft: 13,
  marginRight: 8,
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
  flexShrink: 1,
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