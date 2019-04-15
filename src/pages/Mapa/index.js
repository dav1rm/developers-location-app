import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';

import styles from './styles';

class Mapa extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    developers: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      bio: PropTypes.string,
      avatar_url: PropTypes.string,
      coordinate: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
      error: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired,
    }).isRequired,
  };

  state = {
    region: {
      latitude: -27.2177659,
      longitude: -49.6451598,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    },
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const { developers, showModal } = this.props;
    const { region } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={region}
          style={styles.container}
          onRegionChange={() => this.onRegionChange}
          showsUserLocation
          onLongPress={e => showModal(e.nativeEvent.coordinate)}
        >
          {developers.data.map(dev => (
            <Marker key={dev.id} coordinate={dev.coordinate} title={dev.name} description={dev.bio}>
              <Image source={{ uri: dev.avatar_url }} style={styles.avatar} />
            </Marker>
          ))}
        </MapView>
        {developers.error && <Text style={styles.error}>Erro ao carregar</Text>}
        {developers.loading && <Text style={styles.loading}>carregando...</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mapa);
