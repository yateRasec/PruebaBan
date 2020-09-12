export class SetPublicKey {
    static readonly type = '[App] set public key';
    constructor(public publicKey: string) {}
}

export class AddLogMessge {
    static readonly type = '[App] log';
    constructor(public payload: any) {}
}
