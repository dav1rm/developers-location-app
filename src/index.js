import '~/config/ReactotronConfig';

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Mapa from '~/pages/Mapa';
import Modal from '~/components/Modal';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Mapa />
      <Modal />
    </Fragment>
  </Provider>
);

export default App;
