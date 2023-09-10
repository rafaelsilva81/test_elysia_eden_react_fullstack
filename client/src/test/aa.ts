import { edenFetch } from "@elysiajs/eden/fetch";
import { edenTreaty } from "@elysiajs/eden/treaty";

import type { Server } from "../../../server/src/index.ts";

const app = edenTreaty<Server>("http://localhost:3000");

const fetch = edenFetch<Server>("http://localhost:3000");

export { app, fetch };
