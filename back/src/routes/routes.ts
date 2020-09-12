/*******************************
*  @author Cesar Albeiro Yate  *
********************************/

import { Application } from "express";
import { Controller } from "../controllers/controller";

export class Routes {
    constructor(private app: Application) {
        this.init();
    }

    private init() {
        const controller = new Controller()
        this.app.get('/api/publickey', controller.publicKey)
        this.app.post('/api/saveform', controller.sendDecryptData)
    }

}