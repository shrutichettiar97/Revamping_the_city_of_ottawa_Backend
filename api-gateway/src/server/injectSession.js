import UsersService from "#root/adapters/UsersService";

const injectSession = async(req, res, next) => {
    if (req.cookies.UserSessionId) {
        const userSession = await UsersService.fetchUserSession({
            sessionId: req.cookies.UserSessionId
        });

        res.locals.userSession = userSession;
    }
    return next();
};

export default injectSession;