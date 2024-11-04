import { legacy_createStore,applyMiddleware} from 'redux'
import reducerfun from './reducer'
import {logger} from 'redux-logger'
let store=legacy_createStore(reducerfun,applyMiddleware(logger))

export default store