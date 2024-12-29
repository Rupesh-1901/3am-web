import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { config } from "../config/config.js";
import prisma from "../config/dbConfig.js";
import generateToken from "../utils/generateToken.js";

const createUser = async (req, res, next) => {
	const { loginType, email, password, userName, fullName } = req.body;

	// Validation
	if (!loginType || !fullName || !userName || !email || !password) {
		const error = createHttpError(400, "All fields are required");
		return next(error); //for only async
	}

	if (loginType === "employee") {
		// Database call.
		try {
			const user = await prisma.jobSeekerUser.findUnique({ where: { email: email } });
			if (user) {
				const error = createHttpError(400, "User already exists with this email.");
				return next(error);
			}
		} catch {
			return next(createHttpError(500, "Error while getting user"));
		}

		// password -> hash
		const hashedPassword = await bcrypt.hash(password, 10);

		let newUser;
		try {
			newUser = await prisma.jobSeekerUser.create({
				data: {
					loginType: loginType,
					fullName: fullName,
					userName: userName,
					email: email,
					password: hashedPassword,
				},
			});
		} catch {
			return next(createHttpError(500, "Error while creating user."));
		}
		console.log("object newUser", newUser);
		const subArr = [newUser.loginType, newUser.id];
		try {
			// Token generation JWT
			const token = generateToken(subArr, config.jwtSecret);
			// Response
			res.status(201).json({ accessToken: token });
		} catch {
			return next(createHttpError(500, "Error while signing the jwt token"));
		}
	} else if (loginType === "candidate") {
		// Database call.
		try {
			const user = await prisma.hrUser.findUnique({ where: { email: email } });
			if (user) {
				const error = createHttpError(400, "User already exists with this email.");
				return next(error);
			}
		} catch {
			return next(createHttpError(500, "Error while getting user"));
		}

		// password -> hash
		const hashedPassword = await bcrypt.hash(password, 10);

		let newUser;
		try {
			newUser = await prisma.hrUser.create({
				data: {
					loginType: loginType,
					fullName: fullName,
					userName: userName,
					email: email,
					password: hashedPassword,
				},
			});
		} catch {
			return next(createHttpError(500, "Error while creating user."));
		}
		const subArr = [newUser.loginType, newUser.id];
		try {
			// Token generation JWT
			const token = generateToken(subArr, config.jwtSecret);

			// Response
			res.status(201).json({ accessToken: token });
		} catch {
			return next(createHttpError(500, "Error while signing the jwt token"));
		}
	} else if (loginType === "admin") {
		// Database call.
		try {
			const user = await prisma.adminUser.findUnique({ where: { email: email } });
			if (user) {
				const error = createHttpError(400, "User already exists with this email.");
				return next(error);
			}
		} catch {
			return next(createHttpError(500, "Error while getting user"));
		}

		// password -> hash
		const hashedPassword = await bcrypt.hash(password, 10);

		let newUser;
		try {
			newUser = await prisma.adminUser.create({
				data: {
					loginType: loginType,
					fullName: fullName,
					userName: userName,
					email: email,
					password: hashedPassword,
				},
			});
		} catch {
			return next(createHttpError(500, "Error while creating user."));
		}
		const subArr = [newUser.loginType, newUser.id];
		try {
			// Token generation JWT
			const token = generateToken(subArr, config.jwtSecret);
			// Response
			res.status(201).json({ accessToken: token });
		} catch {
			return next(createHttpError(500, "Error while signing the jwt token"));
		}
	} else {
		const error = createHttpError(400, "Invalid login type");
		return next(error);
	}
};

const loginUser = async (req, res, next) => {
	const { loginType, email, password } = req.body;

	if (!loginType || !email || !password) {
		return next(createHttpError(400, "All fields are required"));
	}
	if (loginType === "employee") {
		try {
			const user = await prisma.jobSeekerUser.findUnique({ where: { email: email } });
			if (!user) {
				return next(createHttpError(404, "User not found."));
			}
			if (user.loginType !== loginType) {
				return next(createHttpError(400, "Incorrect login type."));
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return next(createHttpError(400, "Username or password incorrect!"));
			}
			// Create accesstoken
			const subArr = [user.loginType, user.id];
			const token = generateToken(subArr, config.jwtSecret);

			res.json({ accessToken: token });
		} catch {
			return next(createHttpError(500, "Error while autheticating user"));
		}
	} else if (loginType === "candidate") {
		try {
			const user = await prisma.hrUser.findUnique({ where: { email: email } });
			if (!user) {
				return next(createHttpError(404, "User not found."));
			}
			if (user.loginType !== loginType) {
				return next(createHttpError(400, "Incorrect login type."));
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return next(createHttpError(400, "Username or password incorrect!"));
			}
			// Create accesstoken
			const subArr = [user.loginType, user.id];
			const token = generateToken(subArr, config.jwtSecret);
			res.json({ accessToken: token });
		} catch {
			return next(createHttpError(500, "Error while autheticating user"));
		}
	} else if (loginType === "admin") {
		try {
			const user = await prisma.adminUser.findUnique({ where: { email: email } });
			if (!user) {
				return next(createHttpError(404, "User not found."));
			}
			if (user.loginType !== loginType) {
				return next(createHttpError(400, "Incorrect login type."));
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return next(createHttpError(400, "Username or password incorrect!"));
			}
			// Create accesstoken
			const subArr = [user.loginType, user.id];
			const token = generateToken(subArr, config.jwtSecret);
			res.json({ accessToken: token });
		} catch {
			return next(createHttpError(500, "Error while autheticating user"));
		}
	} else {
		const error = createHttpError(400, "Invalid login type");
		return next(error);
	}
};

export { createUser, loginUser };
