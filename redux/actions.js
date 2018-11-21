let nextTodoId = 0

export const addItem = (text) => ({
    type: 'ADD_TODO',
    payload: {
        id: nextTodoId++,
        text
    }
})

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    payload: {
        id,
    }
})

export const clearAll = () => ({
    type: 'DELETE_ALL',
})
