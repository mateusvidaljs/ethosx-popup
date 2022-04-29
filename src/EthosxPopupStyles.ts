import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  popupBackdrop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%'
  },

  popupContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  popupBoxCenter: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '60%',
    borderRadius: 20,
    paddingVertical: 30
  },

  popupBoxCenterIcon: {
    width: 50,
    resizeMode: 'contain'
  },

  popupBoxCenterTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginVertical: 20,
    marginTop: 10
  },

  popupBoxCenterTextTitle: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#eee',
    fontSize: 18,
    marginBottom: 10
  },

  popupBoxCenterTextMessage: {
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    color: '#eee',
    fontSize: 12
  },

  popupBoxCenterButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  popupBoxCenterButton: {
    height: 40,
    width: '45%',
    borderRadius: 15,
    backgroundColor: '#A4A6A9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  popupBoxCenterButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff'
  },

  popupBoxBottom: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '90%',
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: 'row'
  },

  popupBoxBottomImageContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    width: '20%',
    left: 0,
    height: '100%'
  },

  popupBoxBottomIcon: {
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
    left: 0
  },

  popupBoxBottomIconBg: {
    width: 50,
    height: 50,
    borderBottomLeftRadius: 20
  },

  popupBoxBottomTextContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '60%'
  },

  popupBoxBottomTextTitle: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    fontSize: 18
  },

  popupBoxBottomTextMessage: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 10
  },

  popupBoxBottomCloseButtonContainer: {
    alignItems: 'flex-end',
    width: '12%',
    paddingVertical: 10
  },

  popupBoxBottomCloseButton: {

  }
});

export default styles;