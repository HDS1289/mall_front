import {useParams} from 'react-router-dom'
import FixTodo from '../../action/todo/FixTodo'

const TodoFix = () => {
    const {todoNo} = useParams()

    return (
        <div className='p-4 w-full bg-white'>
            <div className='text-xl'>
                <FixTodo todoNo={todoNo}/>
            </div>
        </div>
    )
}

export default TodoFix