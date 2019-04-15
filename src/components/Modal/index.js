import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {
  View, Text, TextInput, Modal as ModalComponent,
} from 'react-native';
import Button from '~/components/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';
import { Creators as DeveloperActions } from '~/store/ducks/developers';

import styles from './styles';

class Modal extends Component {
  static propTypes = {
    hiddenModal: PropTypes.func.isRequired,
    addDevelopersRequest: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      coordinate: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    }).isRequired,
  };

  state = {
    username: '',
  };

  handleSubmit = () => {
    const {
      addDevelopersRequest,
      modal: { coordinate },
    } = this.props;
    const { username } = this.state;

    addDevelopersRequest(username, coordinate);

    this.handleHideModal();
  };

  handleHideModal = () => {
    const { hiddenModal } = this.props;

    hiddenModal();

    this.setState({ username: '' });
  };

  render() {
    const { username } = this.state;
    const { modal } = this.props;
    return (
      <ModalComponent
        animationType="fade"
        transparent
        visible={modal.visible}
        onRequestClose={() => this.handleHideModal()}
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
              <Button title="Cancelar" onPress={() => this.handleHideModal()} />
              <Button success title="Salvar" onPress={() => this.handleSubmit()} />
            </View>
          </View>
        </View>
      </ModalComponent>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...DeveloperActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
