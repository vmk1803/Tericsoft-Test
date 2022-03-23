import { v4 as uuid } from "uuid";
import { ADD_DATA, ADD_TAGS } from "./actionTypes";
import { store } from "./store";

const init = {
  tags: [
    { id: uuid(), tagName: "BMX" },
    { id: uuid(), tagName: "Mountain" },
    { id: uuid(), tagName: "Road" },
    { id: uuid(), tagName: "Track" },
  ],
  core: [],
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_DATA: {
      return {
        ...state,
        core: [...state.core, payload],
      };
    }

    case ADD_TAGS: {
      return {
        ...state,
        tags: [...state.tags, payload],
      };
    }
    default:
      return state;
  }
};

const data = {
  id: uuid(),
  pageTitle: "CYCLING",
  pageData: [
    {
      id: uuid(),
      title: "Day 1 of BMX",
      image:
        "https://images.unsplash.com/photo-1565109000052-273ca4fbffd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: [
        { id: uuid(), tagName: "HEATS" },
        { id: uuid(), tagName: "HIGHLIGHTS" },
      ],
    },
    {
      id: uuid(),
      title: "Day 2 of BMX",
      image:
        "https://cdn.pixabay.com/photo/2019/06/20/17/00/cycling-4287590__340.jpg",
      tags: [
        { id: uuid(), tagName: "MIXED" },
        { id: uuid(), tagName: "HEATS" },
      ],
    },
    {
      id: uuid(),
      title: "Day 3 of BMX",
      image:
        "https://blog.54ka.org/wp-content/uploads/2013/07/Bmx_Girl_Flatland_II_by_54ka.jpg",
      tags: [
        { id: uuid(), tagName: "SEMIS'S" },
        { id: uuid(), tagName: "MIXED" },
      ],
    },
  ],
};
export { reducer, data };
