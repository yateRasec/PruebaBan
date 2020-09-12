
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { SetPublicKey, AddLogMessge } from '../actions/app.actions';

export class AppStateModel {
    publicKey: string;
    log: any[];
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        publicKey: null,
        log: []
    }
})

export class AppState {
    @Selector()
    static getPublicKey(state: AppStateModel) {
        return state.publicKey;
    }

    @Selector()
    static getAppLog(state: AppStateModel) {
        return state.log;
    }

    @Action(SetPublicKey)
    updatePublicKey({getState, patchState}: StateContext<AppStateModel>, { publicKey }: SetPublicKey) {
        patchState({
            publicKey
        });
    }

    @Action(AddLogMessge)
    addLogMessage({getState, patchState}: StateContext<AppStateModel>, { payload }: AddLogMessge) {
        const state = getState();
        patchState({
            log: [...state.log, payload]
        });
    }

}
