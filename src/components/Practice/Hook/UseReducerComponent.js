import { act, useReducer } from 'react';

function manageCount (state, action){
    console.log(state, action);

    switch (action.type){
        case 'INCREMENT':
          return{ ...state, count: state.count + 1 };
        case 'DECREMENT':
            return{ ...state, count: state.count - 1 };
        default:
            return state;
    }     
}

export default function UseEffectComponent(){
    const [state, dispatch] = useReducer(manageCount, { count: 0 });

    return(
        <div>
            <p> Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>Decrement</button>
        </div>
    );
}


// export default function UseEffectComponent() {
//     const [state, dispatch] = UserReducer(manageCount, { count: 0 });

//     return (
//         <div>
//             <p>Count: {state.count}</p>
//             <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//             <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//         </div>
//     );
// }
