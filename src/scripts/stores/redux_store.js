"use strict";
import { createStore } from "redux";
import { appReducer } from "../reducers/app_reducer";

let store = createStore(appReducer);
