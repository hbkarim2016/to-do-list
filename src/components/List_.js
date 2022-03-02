import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faClock, faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons';
import ScrollableFeed from 'react-scrollable-feed';
import { useDispatch, useSelector } from 'react-redux';
import { editDoing, uploadDoing, deleteDoing } from '../redux/reducers/ReducerSlice';
import { useState } from 'react';
const List_ = () => {
    const [updateValue, setUpdateValue] = useState();
    const {list} = useSelector( state => state.doList );
    const dispatch = useDispatch();

    const edit_ = indx => {
        dispatch( editDoing({indx:indx}) )
    }

    const handleUpdate = (e,indx) => {
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
        dispatch(uploadDoing({title:updateValue, update:update, timeNow:timeNow, indx:indx}))
    }

    const delete_ = indx => {
        dispatch( deleteDoing({ indx:indx }) )
    }

    return(
        <div className='items-content'>
            <ScrollableFeed>
            { list.length > 0 ? list.map( (el, indx) => {
                return(
                <div className="item" key={indx}>
                    
                    { el.update === 1 ? 
                        <>
                            <form className='form-update' onSubmit={e => handleUpdate(e,indx)}>
                                <input onChange={ e =>  setUpdateValue( e.target.value )} type='text' />
                                <button className='btn-done'><FontAwesomeIcon icon={faExternalLinkSquare} /></button>
                            </form>
                        </>
                    :
                    <>
                        <div className='item-header'>
                            <h3><span>#{indx + 1}</span> {el.title}</h3>
                            <p><FontAwesomeIcon icon={faClock} /> 
                                <span className='time-now'>{el.timeNow.hours}:{el.timeNow.minutes}</span>
                                <span className='time-today'>{el.timeNow.day}/{el.timeNow.month}/{el.timeNow.year}</span>
                            </p>
                        </div>
                        <div className='item-control'>
                            <button onClick={() => edit_(indx)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button onClick={() => delete_(indx)}><FontAwesomeIcon icon={faTrashCan} /></button>
                        </div>
                    </>
                    }
                </div>)
            } ) : <div className='not-found'>THERE ARE NOT AND DO HERE</div> }
            </ScrollableFeed>
        </div>
    )
}
export default List_;