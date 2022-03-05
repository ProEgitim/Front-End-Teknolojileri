import { createStore } from "redux";
import {muzReducer} from './reducer'

export const store = createStore(muzReducer);