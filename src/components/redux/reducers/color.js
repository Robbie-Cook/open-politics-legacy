import Colors from "Colors"

export default (state = Colors, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return action.payload;
    default:
      return state;
  }
};
