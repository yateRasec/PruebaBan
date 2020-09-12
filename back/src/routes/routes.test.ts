/*******************************
*  @author Cesar Albeiro Yate  *
********************************/

import { Routes } from "../routes/routes";
import express from "express";

describe('Pruebas de Routes', () => {
    test('instancia correctamente', () => {
        let app = express();
        let routes = new Routes(app)
        expect(routes).toBeDefined()
    })

})