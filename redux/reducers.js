export default function reducer(state = { items: [] }, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state,
                items: [...state.items, action.payload ]
            }

        case 'DELETE_ITEM':
            return { ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }

        case 'DELETE_ALL':
            return { ...state,
                items: []
            }

        default:
            return state
    }
}
