import createHttpError from "http-errors";
import verify from "jsonwebtoken";
import { config } from "../config/config.js";

const authenticate = (req, res, next) => {
	const token = req.header("Authorization");
	if (!token) {
		return next(createHttpError(401, "Authorization token is required."));
	}

	try {
		const parsedToken = token.split(" ")[1];
		const decoded = verify(parsedToken, config.jwtSecret);
		req.user = { id: decoded.sub?.split(".")[1], loginType: decoded.sub?.split(".")[0] };

		next();
	} catch {
		return next(createHttpError(401, "Token expired."));
	}
};

export default authenticate;
