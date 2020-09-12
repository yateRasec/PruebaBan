/*******************************
*  @author Cesar Albeiro Yate  *
********************************/

import { App } from "../src/app";

describe('Pruebas de Routes', () => {
    test('instancia correctamente', () => {
        let app = new App();
        expect(app).toBeDefined()
    })

})