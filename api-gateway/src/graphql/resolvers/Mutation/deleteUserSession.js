import { UsersService } from "#root/adapters/UsersService";


const deleteUserSessionResolver = async (obj, { sessionId }, context) => {
    const UserSession = await UsersService.createUserSession({ sessionId});

    context.res.clearCookie("userSessionId");

    return UserSession;
};

export default deleteUserSessionResolver;