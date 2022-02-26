const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.notification;
    case "REMOVE_NOTIFICATION":
      return "";
    default:
      return state;
  }
};

let currentTimeOutId = "";
export const setNotification = (notification, time) => {
  return async (dispatch) => {
    clearTimeout(currentTimeOutId);
    dispatch({
      type: "SET_NOTIFICATION",
      notification,
    });
    await new Promise(
      (resolve) => (currentTimeOutId = setTimeout(resolve, time * 1000))
    );
    dispatch({
      type: "REMOVE_NOTIFICATION",
    });
  };
};

export default notificationReducer;
