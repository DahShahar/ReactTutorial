/**
 * As per redux tutorial, simply putting in a seperate file though.
 */

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map((item) => {
    // ignore the wrong item
    if (item.id !== itemId) {
      return item;
    }
    // apply the correct function on the correct item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
  return updatedItems;
}

export function sortArray(array, sortFunction) {
  return array.slice().sort(sortFunction);
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
