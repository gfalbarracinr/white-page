import { messagesRef } from "../config/firebase";
import { FETCH_MESSAGES, SET_VISIBLE } from "./types";

export const addMessage = newMessage => async dispatch => {
  messagesRef.push().set(newMessage);
};
export const setVisible = visible => async dispatch =>{
  dispatch({
    type: SET_VISIBLE,
    visible
  })
}
export const fetchMessages = () => async dispatch => {
  messagesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_MESSAGES,
      payload: snapshot.val()
    });
  });
};
