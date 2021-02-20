import got from "got";

import accessEnv from "#root/helpers/accessEnv";

const USERS_SERVICE_URI = "http://login-service:7101";

export default class UsersService {
  static async createUser({ email, password }) {
    console.log("createUser");
    const body = await got
      .post(`${USERS_SERVICE_URI}/users`, { json: { email, password } })
      .json();
    return body;
  }

  static async fetchUser({ userId }) {
    console.log("fetchUser");
    const body = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
    return body;
  }

  static async createUserSession({ email, password }) {
    console.log("createUserSession");
    const body = await got
      .post(`${USERS_SERVICE_URI}/sessions`, { json: { email, password } })
      .json();
    return body;
  }

  static async deleteUserSession({ sessionId }) {
    console.log("deleteUserSession");
    const body = await got
      .delete(`${USERS_SERVICE_URI}/sessions/${sessionId}`)
      .json();
    return body;
  }

  static async fetchUserSession({ sessionId }) {
    console.log("fetchUserSession");
    const body = await got
      .get(`${USERS_SERVICE_URI}/sessions/${sessionId}`)
      .json();
    return body;
  }
}
