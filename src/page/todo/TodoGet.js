import {useParams} from 'react-router-dom'
import GetTodo from '../../action/todo/GetTodo'

const TodoGet = () => {
    const {todoNo} = useParams()

    return (
        <div className='font-extrabold w-full bg-white mt-6'>
            <GetTodo todoNo={todoNo}/>
        </div>
    )
}

export default TodoGet