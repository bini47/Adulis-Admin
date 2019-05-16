import { combineReducers } from "redux";
import authreducer from "./authreducer"
import adminreducer from "./adminReducer"

export default  combineReducers({
    auth:authreducer,
    totalstat: adminreducer,
    wekklystat:adminreducer
})
