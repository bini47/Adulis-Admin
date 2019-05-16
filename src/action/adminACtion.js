import {
  GET_TOTAL_STATSTICS,
  GET_ADMIN_DATA,
  GET_WEEKLY_STATSTICS,
  GET_TOTAL_USERS,
  GET_USERS_COUNT
} from "./types";
import axios from "axios";

// get All

export const getweeklystastics = () => dispatch => {
  console.log("weekly stats");
  axios.get("/activity/weekly-statstics").then(res =>
    dispatch({
      type: GET_WEEKLY_STATSTICS,
      wekklystat: res.data
    })
  );
};
export const gettotalstastics = () => dispatch => {
  console.log("get totola statiscs");
  axios.get("/admin/total-statstics").then(res =>
    dispatch({
      type: GET_TOTAL_STATSTICS,
      totalstat: res.data
    })
  );
};
//GET USERS
export const getTotalUsers = () => dispatch => {
  axios
    .get("/auth/all-users")
    .then(res =>
      dispatch({
        type: GET_TOTAL_USERS,
        payload: res.data
      })
    )
    .catch(
      dispatch({
        type: GET_TOTAL_USERS,
        payload: []
      })
    );
};
export const getAllCustomer = () => dispatch => {
  axios
    .get("/auth/customers")
    .then(res =>
      dispatch({
        type: GET_TOTAL_USERS,
        payload: res.data
      })
    )
    .catch(
      dispatch({
        type: GET_TOTAL_USERS,
        payload: []
      })
    );
};
export const getPmManagers = () => dispatch => {
  axios
    .get("/auth/product-managers")
    .then(res =>
      dispatch({
        type: GET_TOTAL_USERS,
        payload: res.data
      })
    )
    .catch(
      dispatch({
        type: GET_TOTAL_USERS,
        payload: []
      })
    );
};
export const getTransporters = () => dispatch => {
  axios
    .get("/auth/transporters")
    .then(res =>
      dispatch({
        type: GET_TOTAL_USERS,
        payload: res.data
      })
    )
    .catch(
      dispatch({
        type: GET_TOTAL_USERS,
        payload: []
      })
    );
};
export const getAdmins = () => dispatch => {
  axios
    .get("/auth/admins")
    .then(res =>
      dispatch({
        type: GET_TOTAL_USERS,
        payload: res.data
      })
    )
    .catch(
      dispatch({
        type: GET_TOTAL_USERS,
        payload: []
      })
    );
};
//COUNT
export const getUsersCount = () => dispatch => {
  axios
    .get("/auth/count")
    .then(res =>
      dispatch({
        type: GET_USERS_COUNT,
        payload: res.data
      })
    )
    .catch(
      dispatch({
        type: GET_USERS_COUNT,
        payload: {}
      })
    );
};
//AUTHORIZATION

export const updateToCustomer = id => dispatch => {
  axios
    .post(`/auth/update-to-customer/${id}`)
    .then(res => dispatch(getTotalUsers()))
    .catch(err => console.log("err", err));
};

export const updateToProductManager = id => dispatch => {
  axios
    .post(`/auth/update-to-manager/${id}`)
    .then(res => dispatch(getTotalUsers()))
    .catch(err => console.log("err", err));
};

export const updateToTreansporter = id => dispatch => {
  axios
    .post(`/auth/update-to-transporter/${id}`)
    .then(res => dispatch(getTotalUsers()))
    .catch(err => console.log("err", err));
};

export const updateToAdmin = id => dispatch => {
  axios
    .post(`/auth/update-to-admin/${id}`)
    .then(res => dispatch(getTotalUsers()))
    .catch(err => console.log("err", err));
};
