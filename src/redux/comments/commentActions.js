import * as ActionTypes from "./commentTypes";
import { COMMENTS } from '../../shared/comments';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment,
    }


    
});

// export const postComment = (dishId, rating, author, comment) => (dispatch) => {

//     const newComment = {
//         dishId: dishId,
//         rating: rating,
//         author: author,
//         comment: comment
//     };
//     newComment.date = new Date().toISOString();
    
//     return fetch(baseUrl + 'comments', {
//         method: "POST",
//         body: JSON.stringify(newComment),
//         headers: {
//           "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             throw error;
//       })
//     .then(response => response.json())
//     .then(response => dispatch(addComment(response)))
//     .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
// };

export const fetchComments = () => (dispatch) => {    
  
    setTimeout(() => {
      dispatch(addComments(COMMENTS));
    }, 2000);



  //communicating with server
  // return fetch(baseUrl + 'comments')
  //   .then(response => {
  //       if (response.ok) {
  //           return response;
  //         } else {
  //           var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //           error.response = response;
  //           throw error;
  //         }
  //       },
  //       error => {
  //             var errmess = new Error(error.message);
  //             throw errmess;
  //       }
  //   )
  //   .then(response => response.json())
  //   .then(comments => dispatch(addComments(comments)))
  //   .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});