import {Delete} from '../../redusers';


const Dog = ({dog, dispatch}) => {
    const {id,name} = dog;
    return (
        <div>
            {id}--{name}
            <button onClick={()=>dispatch({type: Delete, payload:{id:id}})}>delete</button>

        </div>
    );
};

export {
    Dog
};