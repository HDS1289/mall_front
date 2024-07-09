import {useEffect, useState} from 'react'
import {getTodos} from '../../api/todoApi'
import useTo from '../../page/useTo'
import Paging from '../Paging'

const ListTodo = () => {
    const {toGet, toList, page, size, refresh} = useTo()
    const [response, setResponse] = useState({
        items: [],
        pageNums: [],
        request: null,
        prev: false,
        next: false,
        currentPage: 0,
        prevPage: 0,
        nextPage: 0,
        totPageCnt: 0,
        totItemCnt: 0
    })

    useEffect(() => {
        getTodos({page, size}).then(response => setResponse(response))
    }, [page, size, refresh])

    return (
        <div className='border-2, border-blue-100 mr-2 ml-2'>
            <div className='flex flex-wrap mx-auto justify-center p-6'>
                {response.items.map(todo =>
                    <div key={todo.todoNo} 
                        className='w-full min-w-[400px] p-2 m-2 rounded shadow-md'
                        onClick={() => toGet(todo.todoNo)}>
                        <div className='flex'>
                            <div className='font-extrabold text-2xl p-2 w-2/12'>
                                {todo.todoNo}
                            </div>
                            <div className='font-extrabold text-xl m-1 p-2 w-7/12'>
                                {todo.title}
                            </div>
                            <div className='font-medium text-xl m-1 p-2 w-3/12'>
                                {todo.dueDate}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Paging response={response} toList={toList}/>
        </div>
    )
}

export default ListTodo