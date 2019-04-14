import React, { Component } from 'react';

import { View } from 'react-native';

import styles from './styles';

export default class Modal extends Component {
  state = {
    visible: false,
    username: '',
  };

  setModalVisible(visible) {
    this.setState({ visible });
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.state.visible}
        onRequestClose={() => {
          this.setModalVisible(!this.state.visible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.contentModal}>
            <Text style={styles.titleModal}>Adicionar novo local</Text>
            <TextInput style={styles.input} placeholder="Usuário no github" />
            <View style={styles.buttonArea}>
              <Button
                title="Cancelar"
                onPress={() => {
                  this.setModalVisible(!this.state.visible);
                }}
              />
              <Button success title="Salvar" onPress={() => {}} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
