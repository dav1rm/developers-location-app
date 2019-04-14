import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import styles from './styles';

export default class App extends Component {
  state = {
    region: {
      latitude: -27.2177659,
      longitude: -49.6451598,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    },
    users: [],
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  showLocation = (event) => {
    const user = {
      title: 'User qualquer',
      description: 'Bla bla bla bla...',
      latlng: event.nativeEvent.coordinate,
    };

    this.setState({ users: [...this.state.users, user] });
  };

  render() {
    const { region, users } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={region}
          style={styles.container}
          onRegionChange={() => this.onRegionChange}
          showsUserLocation
          onLongPress={e => this.showLocation(e)}
        >
          {users.map(user => (
            <Marker
              key={user.latlng.latitude}
              coordinate={user.latlng}
              title={user.title}
              description={user.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
