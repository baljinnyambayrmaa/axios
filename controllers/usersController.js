// create user
// upadete user
// delete user
// get user
// get users

import { getUserByEmail } from "../queries/getUser.js";

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(JSON.stringify(user));
  } catch (error) {
    res.status(500).send(error.message);
  }
};
