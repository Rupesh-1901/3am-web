import app from "./src/app.js";
import { config } from "./src/config/config.js";

const startServer = () => {
	const port = config?.port || 5513;

	app?.listen(port, () => {
		console.log(`Listening on port: ${port}`);
	});
};

startServer();
