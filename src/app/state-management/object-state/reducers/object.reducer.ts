import { Action, createReducer, on } from '@ngrx/store';
import { incrementObj1, decrementObj1 } from '../actions/object-1.actions';
import { decrementObj2, incrementObj2 } from '../actions/object-2.actions';
import { ObjectState } from '../protocols/object';

const initialState: ObjectState = {
  obj1: 0,
  obj2: 1,
  obj3: 2
};

const _objectReducer = createReducer(
  initialState,
  on(incrementObj1, (state) => ({ ...state, obj1: state.obj1 + 1 })),
  on(decrementObj1, (state) => ({ ...state, obj1: state.obj1 - 1 })),
  on(incrementObj2, (state) => ({ ...state, obj2: state.obj2 + 1 })),
  on(decrementObj2, (state) => ({ ...state, obj2: state.obj2 - 1 }))
);

export const objectReducer = (state: ObjectState | undefined, action: Action) => {
  return _objectReducer(state, action);
}
