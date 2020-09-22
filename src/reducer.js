export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  let index;

  if (action.item) {
    index = state.basket.findIndex((item) => item.id === action.item.id);
  }

  switch (action.type) {
    /*---------------------------------------------------------------------------------
    Triggers when an item is added to the basket*/
    case "ADD_TO_BASKET":
      if (index === -1) {
        action.item.count = 1;
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      } else {
        state.basket[index].count += 1;
        return {
          ...state,
        };
      }

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    /*---------------------------------------------------------------------------------
    Triggers when an item is removed from the basket*/
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.item.id),
      };

    /*---------------------------------------------------------------------------------
    Triggers when the number of items in the basket is changed through the selects*/
    case "CHANGE_COUNT_IN_BASKET":
      if (index === -1) {
        return {
          ...state,
        };
      } else {
        if (action.item.count == 0) {
          return {
            ...state,
            basket: state.basket.filter((item) => item.id !== action.item.id),
          };
        } else {
          state.basket[index].count = action.item.count;
          return {
            ...state,
          };
        }
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
