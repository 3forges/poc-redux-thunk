import {
  ADD_TODO,
  DISPATCH_IN_MIDDLE,
  GET_STATE_IN_MIDDLE,
  SUBSCRIBE_IN_MIDDLE,
  UNSUBSCRIBE_IN_MIDDLE,
  THROW_ERROR
} from './actionTypes'

function id(state: { id: number }[]) {
  return (
    state.reduce((result, item) => (item.id > result ? item.id : result), 0) + 1
  )
}

export interface Todo {
  id: number
  text: string
}
export type TodoAction = { type: 'ADD_TODO'; text: string }

export function todos(state: Todo[] = [], action: TodoAction): Todo[] {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: id(state),
          text: action.text
        }
      ]
    default:
      return state
  }
}

export function todosReverse(state: Todo[] = [], action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: id(state),
          text: action.text
        },
        ...state
      ]
    default:
      return state
  }
}

export function dispatchInTheMiddleOfReducer(
  state = [],
  action: { type: 'DISPATCH_IN_MIDDLE'; boundDispatchFn: () => void }
) {
  switch (action.type) {
    case DISPATCH_IN_MIDDLE:
      action.boundDispatchFn()
      return state
    default:
      return state
  }
}

export function getStateInTheMiddleOfReducer(
  state = [],
  action: { type: 'GET_STATE_IN_MIDDLE'; boundGetStateFn: () => void }
) {
  switch (action.type) {
    case GET_STATE_IN_MIDDLE:
      action.boundGetStateFn()
      return state
    default:
      return state
  }
}

export function subscribeInTheMiddleOfReducer(
  state = [],
  action: { type: 'SUBSCRIBE_IN_MIDDLE'; boundSubscribeFn: () => void }
) {
  switch (action.type) {
    case SUBSCRIBE_IN_MIDDLE:
      action.boundSubscribeFn()
      return state
    default:
      return state
  }
}

export function unsubscribeInTheMiddleOfReducer(
  state = [],
  action: { type: 'UNSUBSCRIBE_IN_MIDDLE'; boundUnsubscribeFn: () => void }
) {
  switch (action.type) {
    case UNSUBSCRIBE_IN_MIDDLE:
      action.boundUnsubscribeFn()
      return state
    default:
      return state
  }
}

export function errorThrowingReducer(
  state = [],
  action: { type: 'THROW_ERROR' }
) {
  switch (action.type) {
    case THROW_ERROR:
      throw new Error()
    default:
      return state
  }
}
