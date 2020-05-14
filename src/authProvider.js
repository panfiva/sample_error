export default {
  // called when the user attempts to log in
  login: () => {
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: () => {
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
