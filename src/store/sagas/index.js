import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as DevelopersActions, Types as DevelopersTypes } from '~/store/ducks/developers';

function* addDevelopers(action) {
  try {
    const { username } = action.payload;
    const { coordinate } = yield select(state => state.modal);

    const {
      data: {
        id, name, avatar_url, bio,
      },
    } = yield call(api.get, `/users/${username}`);
    const dev = {
      id,
      name,
      avatar_url,
      bio,
      coordinate,
    };

    yield put(DevelopersActions.addDevelopersSuccess(dev));
  } catch (err) {
    yield put(DevelopersActions.addDevelopersFailure());
  }
}

export default function* rootSaga() {
  return yield all([takeLatest(DevelopersTypes.ADD_REQUEST, addDevelopers)]);
}
