import axios from "axios";
import {
  ADD_DONOR_FAIL,
  ADD_DONOR_REQUEST,
  ADD_DONOR_SUCCESS,
  LIST_DONORS_FAIL,
  LIST_DONORS_REQUEST,
  LIST_DONORS_SUCCESS,
} from "../type";
export const addDonorAction = (donor) => async (dispatch) => {
  dispatch({
    type: ADD_DONOR_REQUEST,
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/donor", donor, config);
    dispatch({
      type: ADD_DONOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_DONOR_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};
export const listDonorsAction = () => async (dispatch) => {
  dispatch({
    type: LIST_DONORS_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/donor");
    dispatch({
      type: LIST_DONORS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_DONORS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};
