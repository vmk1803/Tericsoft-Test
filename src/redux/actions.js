import { ADD_DATA, ADD_TAGS } from "./actionTypes";

const add_data = (payload) => {
  return {
    type: ADD_DATA,
    payload,
  };
};

const add_tags = (payload) => ({
  type: ADD_TAGS,
  payload,
});

export { add_data, add_tags };
