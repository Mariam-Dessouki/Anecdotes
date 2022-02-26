import React from "react";
// import { useSelector } from "react-redux";
import { connect } from "react-redux";

const Notification = (props) => {
  // const notification = useSelector((state) => state.notification);
  const notification = props.notification;
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  };
  return notification ? <div style={style}>{notification}</div> : null;
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};
// export default Notification;
const ConnectedNotes = connect(mapStateToProps)(Notification);
export default ConnectedNotes;
