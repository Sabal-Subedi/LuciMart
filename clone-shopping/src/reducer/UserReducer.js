export const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD USER":
      console.log("set user");
      return (state = {
        email: action.user.email,
        password: action.user.password,
      });

    case "REMOVE USER":
      return (state = null);

    default:
      return state;
  }
};
