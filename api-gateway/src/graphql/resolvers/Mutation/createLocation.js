import LocationService from "#root/adapters/LocationService";

const createlocationResolver = (obj, { description, title }, context) => {
  //   console.log("context", context);
  console.log("context.res.locals.userSession", context.res.locals.userSession);
  //   if (!context.res.locals.userSession) throw new Error("Not Logged in!");

  return LocationService.createLocation({ description, title });
};

export default createlocationResolver;
