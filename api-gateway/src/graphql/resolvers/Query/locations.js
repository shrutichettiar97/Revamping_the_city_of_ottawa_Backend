import locationService from "#root/adapters/locationService";

const locationResolver = async () => {
  console.log("hellooo here");
  return await locationService.fetchAllLocations();
};

export default locationResolver;
