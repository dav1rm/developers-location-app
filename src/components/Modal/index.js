import React, { Component } from 'react';

import { View, Text, TextInput } from 'react-native';
import Button from '~/components/Button';

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
    const { visible, username } = this.state;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => {
          this.setModalVisible(!visible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.contentModal}>
            <Text style={styles.titleModal}>Adicionar novo local</Text>
            <TextInput
              style={styles.input}
              placeholder="Usuário no github"
              value={username}
              onChangeText={text => this.setState({ username: text })}
            />
            <View style={styles.buttonArea}>
              <Button
                title="Cancelar"
                onPress={() => {
                  this.setModalVisible(!visible);
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
