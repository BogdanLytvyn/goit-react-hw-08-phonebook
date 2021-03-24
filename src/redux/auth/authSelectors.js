const getIsAuthenticated = state => state.auth.isAtentiicted;

const getUsername = state => state.auth.user.name;

export { getIsAuthenticated, getUsername };
