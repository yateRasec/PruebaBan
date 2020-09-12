/*******************************
*  @author Cesar Albeiro Yate  *
********************************/

import { UTILITIES } from "../util/utilities";

describe('Pruebas de Routes', () => {
    test('instancia correctamente', () => {
        expect(UTILITIES.hayValor("asd")).toEqual(true)
    })

    test('instancia correctamente', () => {
        expect(UTILITIES.hayValor(null)).toEqual(false)
    })

    test('instancia correctamente', () => {
        let object = {
            data:{
                client:{
                    nombre:"Cesar",
                    apellido:"Yate"
                }
            }
        }
        expect(UTILITIES.hayValorRuta(object, "data.client.nombre")).toEqual(true)
    })

    test('instancia correctamente', () => {
        let object = {
            data:{
                client:{
                    nombre:"Cesar",
                    apellido:"Yate"
                }
            }
        }
        expect(UTILITIES.hayValorRuta(object, "data.clientes.nombre")).toEqual(false)
    })
})