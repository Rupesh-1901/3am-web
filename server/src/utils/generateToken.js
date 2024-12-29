import jwt from "jsonwebtoken";

const generateToken = (arr, secret) => {
	const token = jwt?.sign({ sub: arr?.join(".") }, secret, {
		expiresIn: "7d",
		algorithm: "HS256",
	});
	return token;
};
export default generateToken;
