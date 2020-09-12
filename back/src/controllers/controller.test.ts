/*******************************
*  @author Cesar Albeiro Yate  *
********************************/

import { Controller } from "../controllers/controller";

describe('Pruebas de controller', () => {
    test('instancia correctamente', () => {
        let controller = new Controller()
        expect(controller).toBeDefined()
    })

})