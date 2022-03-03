import * as ActionTypes from "./formTypes";
import { baseUrl } from '../../shared/baseUrl'


export const addFeedback = ( feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload:  feedback
});

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message, id) => (dispatch) => {

    const newFeedback = {
        firstname: firstname ,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message,
        id: id 
    };
    newFeedback.date = new Date().toISOString();
    
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};