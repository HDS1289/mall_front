import {useEffect, useState} from 'react'
import {getTodo, delTodo} from '../../api/todoApi'
import useTo from '../../page/useTo'
import DelModal from '../DelModal'

const GetTodo = ({todoNo}) => {
    const [del, setDel] = useState(false)
    const {toList, toFix, page, size} = useTo()
    const [todo, setTodo] = useState({
        todoNo: 0,
        title: '',
        writer: '',
        dueDate: null,
        done: false
    })

    useEffect(() => {
        getTodo(todoNo).then(todo => setTodo(todo))
    }, [todoNo])

    const onClickDel = () => setDel(true)
    const deleteTodo = () => {
        delTodo(todoNo)
        toList()
    }
    const close = () => setDel(false)

    return (
        <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
            {del ? <DelModal close={close} del={deleteTodo}/> : <></>}
            {makeItem('번호', todo.todoNo)}
            {makeItem('작성자', todo.writer)}
            {makeItem('제목', todo.title)}
            {makeItem('기한', todo.dueDate)}
            {makeItem('완료', todo.done ? 'Y' : 'N')}
            <div className='flex justify-end p-4'>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-green-500'
                    onClick={() => toFix(todoNo)}>FIX</button>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-red-500'
                    onClick={onClickDel}>DELETE</button>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-blue-500'
                    onClick={() => toList({page, size})}>LIST</button>
            </div>
        </div>
    )
}

const makeItem = (title, value) => 
    <div className='flex justify-center'>
        <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
            <div className='w-1/5 p-6 text-right font-bold'>{title}</div>
            <div className='w-4/5 p-6 rounded border border-solid shadow-md'>{value}</div>
        </div>
    </div>

export default GetTodo