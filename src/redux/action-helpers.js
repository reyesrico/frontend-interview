// Inspired by https://github.com/acdlite/flux-standard-action and
// https://redux-actions.js.org/docs/api/createAction.html

// Returns an action creator that stores the first argument (probably an object, so you can store multiple key-values
// and destructure) as the action.payload. And the second argument as action.meta; meta can be useful to provide the
// reducer with request parameters that aren't included in a payload returned by the server, for example.
export const makeStandardActionCreator = (ACTION_TYPE) => {
    return (payload, meta) => ({
        meta,
        payload,
        type: ACTION_TYPE,
    });
};

// To make action creators that make an API call and dispatch an action creator on success with the response.
// Doesn't handle dispatching for errors.
export const makeApiActionCreator = (apiCall, successActionCreator) => {
    return args => dispatch => {
        return apiCall(args).then(({ data }) => {
            dispatch(successActionCreator(data, args));
        });
    };
};
