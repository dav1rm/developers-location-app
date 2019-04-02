import '~/config/ReactotronConfig';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends Component {
  state = {};

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            // initial region set to Bileto
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
        />
      </View>
    );
  }
}
