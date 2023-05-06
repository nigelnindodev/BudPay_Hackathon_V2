import Router from "@koa/router";
import { general } from "./controller";
import { payments } from "./controller";

const unprotectedRouter = new Router();

// Hello World route
unprotectedRouter.get("/", general.helloWorld);

unprotectedRouter.post("/payments/request", payments.initializeBudPayPayment);

export { unprotectedRouter };