import { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { addDoing } from "../redux/reducers/ReducerSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Add = () => {
    const [ toDoListInput, setToDoListInput ] = useState('');
    const addRef = useRef();

    const dispatch = useDispatch();

    const handleInput = e => {
        let inputValue = e.target.value;
        setToDoListInput( inputValue )
    }
    const handleSubmit = e => {
        e.preventDefault();
        let time = new Date(),
            hourNow = time.getHours(),
            minNow = time.getMinutes(),
            monthNow = time.getMonth() + 1,
            dayNow = time.getDate(),
            yearNow = time.getFullYear(),
            timeNow = { 
                hours:hourNow, 
                minutes:minNow, 
                day:dayNow, 
                month:monthNow, 
                year:yearNow 
            },
            update = 0;
        dispatch( addDoing({title:toDoListInput, timeNow:timeNow, update:update}) );
    }

    useEffect(() => {
        addRef.current.focus()
    },[])

    return(
        <>
            <div className="logo">
                <span>D</span>
                <FontAwesomeIcon className="check-logo" icon={faCheckCircle} />
            </div>
            <form className='add-form' onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    onChange={handleInput} 
                    ref={addRef}
                />
                <button className="btn-done"></button>
            </form>
        </>
    )
}
export default Add;