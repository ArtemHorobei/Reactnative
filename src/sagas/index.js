import { all } from 'redux-saga/effects';
import authSaga from './oAuthSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
    ]);
}
