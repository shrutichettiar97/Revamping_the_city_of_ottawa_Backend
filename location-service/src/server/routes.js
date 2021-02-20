import { Location } from "#root/db/models";

const setupRoutes = (app) => {
  app.get("/locations", async (req, res, next) => {
    console.log("locations!!!");
    try {
      const locations = await Location.findAll();
      return res.json(locations);
    } catch (e) {
      console.log("locations erroer");
      return next(e);
    }
  });

  app.post("/location", async (req, res, next) => {
    console.log("location");
    console.log("req.body", req.body);
    if (!req.body.description || !req.body.title) {
      return next(new Error("Invalid body!"));
    }
    try {
      const location = await Location.create({
        description: req.body.description,
        title: req.body.title,
      });
      return res.json(location);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;
