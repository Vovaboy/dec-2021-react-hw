import {useReducer, useRef} from "react";
import {ADDDog,} from "../../redusers";
import {Dog} from "../Dog/Dog";

const Dogs = () => {
    const name = useRef();

    const [state, dispatch] = useReducer();

    const newDog = () => {
        const newDog = name.current.value;
        dispatch({type: ADDDog, payload: {dog: newDog}})
        name.current.value = '';
    }

    return (
        <<div>
    {
        state.dogs.map(dog => (
            <div key={dog.id}>
                {dog.name}
                <button onClick={() => dispatch({ type: 'deleteDog', payload: dog.id })}>delete</button>
            </div>
        ))
    }
</div>
        </div>
    );
};

export {
    Dogs
};