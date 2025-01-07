import jwt from "jsonwebtoken";

const generateToken = (obj, secret) => {
  const { role, id } = obj;
  const token = jwt.sign({ role: role, id: id.toString() }, secret, {
    expiresIn: "7d",
    algorithm: "HS256",
  });
  return token;
};
export default generateToken;
