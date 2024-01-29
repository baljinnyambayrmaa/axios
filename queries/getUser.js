import fs from "fs";
const userDb = "/Users/23LP6963/Desktop/Node.js/node.js/models/Users.json";

export const getUserByEmail = async (request, res) => {
  try {
    const { email: paramEmail } = request.params;
    const allUsersJson = await fs.readFileSync(userDb);
    const allUser = JSON.parse(allUsersJson);
    const exactUser = allUser.find(({ email }) => email === paramEmail);

    return exactUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
