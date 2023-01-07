import {
  ADD_DONOR_FAIL,
  ADD_DONOR_REQUEST,
  ADD_DONOR_SUCCESS,
  LIST_DONORS_FAIL,
  LIST_DONORS_REQUEST,
  LIST_DONORS_SUCCESS,
} from "../type";
const initialState = {};
export const addDonorReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DONOR_REQUEST:
      return {
        loading: true,
      };
    case ADD_DONOR_SUCCESS:
      return {
        loading: false,
        donor: payload,
        success: true,
      };
    case ADD_DONOR_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
export const listDonorsReducer = (state = { donors: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_DONORS_REQUEST:
      return {
        loading: true,
      };
    case LIST_DONORS_SUCCESS:
      return {
        loading: false,
        donors: payload,
      };
    case LIST_DONORS_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
