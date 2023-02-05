import {
  max,
  min,
  removeItemById,
  total,
  mapItemsToAmounts,
  updateItemById,
} from "../utils";
import { CREATE, REMOVE, SEARCH, UPDATE } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE: {

      return {
        // FIX: create the logic to add the new item to the state
        ...state
      };
    }

    case UPDATE: {
      const newData = updateItemById(
        [...state.data],
        action.payload.id,
        action.payload
      );

      return {
        data: newData,
        min: min(mapItemsToAmounts(newData)),
        max: max(mapItemsToAmounts(newData)),
        total: total(mapItemsToAmounts(newData)),
        searchText: state.searchText,
      };
    }

    case REMOVE: {
      const newData = removeItemById([...state.data], action.payload);
      return {
        data: newData,
        min: min(mapItemsToAmounts(newData)),
        max: max(mapItemsToAmounts(newData)),
        total: total(mapItemsToAmounts(newData)),
        searchText: state.searchText,
      };
    }
    case SEARCH:
      return {
        ...state,
        searchText: action.payload,
      };

    default:
      throw new Error();
  }
};

export default reducer;
