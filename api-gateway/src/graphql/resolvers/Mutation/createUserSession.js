import UsersService from "#root/adapters/UsersService";

const createUserSessionResolver = async (obj, { email, password }, context) => {
  console.log("createUserSessionResolver");
  const UserSession = await UsersService.createUserSession({ email, password });

  context.res.cookie("userSessionId", UserSession.id, { httpOnly: true });

  return UserSession;
};

export default createUserSessionResolver;
