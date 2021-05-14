export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newP = [...state.people, action.newItem]
    return {
      ...state,
      people: newP,
      isModalOpen: true,
      modalContent: 'item added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'Missing input' }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }

  if (action.type === 'REMOVE') {
    const newP = state.people.filter((p) => p.id !== action.payload)
    return { ...state, people: newP }
  }

  return state
}
