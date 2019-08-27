import { all, delay, put, takeLatest } from 'redux-saga/effects'

import { actionTypes, failure } from './actions'
function* loadDataSaga() {
    const errors = {
        name: ['слишком короткая', 'похожа на собачью'],
        insta: ['формат не верен'],
        pass: ['пароль слишком прост']
    }

    yield delay(2000)
    const beautifyErrorObject = obj => {
        return Object.entries(obj).reduce((acc = {}, [key, value]) => {
            return { ...acc, [key]: value.join(', ') }
        }, {})
    }
    beautifyErrorObject(errors)
    yield put(failure(beautifyErrorObject(errors)))
}

function* rootSaga() {
    yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)])
}

export default rootSaga
