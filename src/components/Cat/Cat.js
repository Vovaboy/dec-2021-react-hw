import {Delete} from "../../redusers";

const Cat = ({cat, dispatch}) => {
    const {id, name} = cat;
    return (
        <div>
            {id}--{name}
            <button onClick={() => dispatch({type: Delete, payload: {id}})}>delete</button>
        </div>
    );
};

export {
    Cat
};