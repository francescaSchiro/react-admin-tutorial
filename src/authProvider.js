import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";

// since there is no public authentication API we can use,
// let’s use a fake authentication provider that accepts every login request, 
// and stores the username in localStorage.
// Each page change will require that localStorage contains a username item.
// The authProvider is a simple function, which must return a Promise:

export default (type, params) => {
  // called when the user attempts to LOG IN
  if (type === AUTH_LOGIN) {
    const { username } = params;
    localStorage.setItem("username", username);
    // accept all username/password combinations
    return Promise.resolve();
  }
  // called when the user clicks on the LOGOUT button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("username");
    return Promise.resolve();
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  }
  return Promise.reject("Unknown method");
};
