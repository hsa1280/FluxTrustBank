// import {EventEmitter} from 'fbemitter';
// import AppDispatcher from './AppDispatcher';
// import bankConstants from './constants';
//
// const CHANGE_EVENT = 'change';
// let _emitter = new EventEmitter();
// let balance = 0;
//
// let BankBalanceStore = {
//
//   getState() {
//     return balance;
//   },
//
//   addListener: (callback) => {
//     return _emitter.addListener(CHANGE_EVENT, callback);
//   }
// };
//
// BankBalanceStore.dispatchToken = AppDispatcher.register(action => {
//   switch(action.type) {
//     case bankConstants.CREATE_ACCOUNT:
//       balance = 0;
//       _emitter.emit(CHANGE_EVENT);
//       break;
//
//     case bankConstants.DEPOSITED_INTO_ACCOUNT:
//       balance = balance + action.ammount;
//       _emitter.emit(CHANGE_EVENT);
//       break;
//
//     case bankConstants.WITHDREW_FROM_ACCOUNT:
//       balance = balance - action.ammount;
//       _emitter.emit(CHANGE_EVENT);
//       break;
//   }
// });
//
// export default BankBalanceStore;

import AppDispatcher from './AppDispatcher';
import {ReduceStore} from 'flux/utils';
import bankConstants from './constants';

let balance = 0;

class BankBalanceStore extends ReduceStore {

  getInitialState() {
    return 0;
  }

  reduce(state, action) {
    switch(action.type) {
      case bankConstants.CREATE_ACCOUNT:
        return 0;

      case bankConstants.DEPOSITED_INTO_ACCOUNT:
        return state + action.ammount;

      case bankConstants.WITHDREW_FROM_ACCOUNT:
        return state - action.ammount;

      default:
        return state;
    }
  }

};

export default new BankBalanceStore(AppDispatcher);
