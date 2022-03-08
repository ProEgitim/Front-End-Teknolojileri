import { createStore, applyMiddleware } from 'redux'
import {addTodo} from './reducer/addTodo.reducer'
import { logger } from 'redux-logger'


export default createStore(addTodo, applyMiddleware(logger));