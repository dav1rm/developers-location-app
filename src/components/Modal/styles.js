import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  contentModal: {
    padding: 20,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  titleModal: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
    fontSize: 18,
    marginBottom: 20,
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default styles;
