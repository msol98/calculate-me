import { createStore } from "redux";
import calculatorReducer from "../reducers/calculator";

export default createStore(calculatorReducer);