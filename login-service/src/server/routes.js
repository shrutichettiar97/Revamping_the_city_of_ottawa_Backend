import { User, UserSession } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import passwordCompareSync from "#root/helpers/passwordCompareSync";

const USER_SESSION_EXPIRY_HOURS = 1;

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

const setupRoutes = (app) => {
  app.post("/sessions", async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return next(new Error("Invalid body!"));
    }

    try {
      const user = await User.findOne({
        attributes: {},
        where: { email: req.body.email },
      });

      if (!user) return next(new Error("Invalid email!"));

      if (!passwordCompareSync(req.body.password, user.passwordHash)) {
        return next(new Error("Incorrect password!"));
      }

      let expiresAt = new Date();
      expiresAt = expiresAt.addHours(USER_SESSION_EXPIRY_HOURS);

      const sessionToken = generateUUID();

      const userSession = await UserSession.create({
        expiresAt,
        id: sessionToken,
        userId: user.id,
      });

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

  app.delete("/sessions/:sessionId", async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionId);

      if (!userSession) return next(new Error("Invalid session ID"));

      await userSession.destroy();

      return res.end();
    } catch (e) {
      return next(e);
    }
  });

  app.get("/sessions/:sessionId", async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionId);

      if (!userSession) return next(new Error("Invalid session ID"));

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

  app.post("/users", async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return next(new Error("Invalid body!"));
    }

    try {
      console.log(req.body.email, req.body.password);
      const newUser = await User.create({
        email: req.body.email,
        id: generateUUID(),
        passwordHash: hashPassword(req.body.password),
      });

      return res.json(newUser);
    } catch (e) {
      return next(e);
    }
  });

  app.get("/users/:userId", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId);

      if (!user) return next(new Error("Invalid user ID"));

      return res.json(user);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;
