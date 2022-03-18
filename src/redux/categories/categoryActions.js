import * as ActionTypes from "./categoryTypes";


export const fetchCategories = () => (dispatch) => {

    dispatch(categoryLoading(true));

    //communication with server
    return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
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
              var errmess = new Error(error.message);
              throw errmess;
        }
    )
    .then(response => response.json())
    .then(categories => dispatch(addCategory(categories)))
    .catch(error => dispatch(categoryFailed(error.message)));
}

export const categoryLoading = () => ({
    type: ActionTypes.CATEGORIES_LOADING
});

export const categoryFailed = (errmess) => ({
    type: ActionTypes.CATEGORIES_FAILED,
    payload: errmess
});

export const addCategory = (categories) => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: categories
});