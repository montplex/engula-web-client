import { App } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";

export default function setupAuth0(app: App) {
	app.use(
		createAuth0({
			domain: "dev-jkr7073ttn8flrex.us.auth0.com",
			clientId: "78ZA9Z0o2jBTAVoBdp5YAc6a0YedI6tE",
			authorizationParams: {
				redirect_uri: window.location.origin
			}
		})
	);
}
