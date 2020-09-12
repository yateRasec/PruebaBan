/*******************************
*  @author Cesar Albeiro Yate  *
********************************/

import { Response, Request } from "express";
import { environment } from "../env";
import { existsSync, readFileSync } from "fs";
import { UTILITIES } from "../util/utilities";
const forge = require('node-forge');

export class Controller {

    public publicKey(req: Request, res: Response) {
        if (existsSync(environment.keys.publicKey)) {
            const key = readFileSync(environment.keys.publicKey, { encoding: 'utf-8', flag: 'r' });
            res.status(200).json({ key });
        }
    }

    public sendDecryptData(req: Request, res: Response) {
        const data = req.body;
        if (!UTILITIES.hayValor(data.name) || !UTILITIES.hayValor(data.document)) {
            return res.status(400).json({ message: 'DATOS INCORRECTOS' })
        }
        const pKey = readFileSync(environment.keys.privateKey, { encoding: 'utf-8', flag: 'r' });
        const fPKey = forge.pki.privateKeyFromPem(pKey);
        const buffer = Buffer.from(data.document, 'base64');
        const decrypted = fPKey.decrypt(buffer, 'RSA-OAEP', {
            md: forge.md.sha512.create(),
            mgf1: {
                md: forge.md.sha512.create()
            }
        });
        res.status(200).json({ ...data, decrypted, message: '¡DATOS RECIBIDOS!' });
    }
}