import Menu from './Menu'

const Layout = ({children}) => {
    return (
        <>
            <Menu/>
            <div className='bg-white my-5 w-full flex flex-col space-y-1
                md:flex-row md:space-x-1 md:space-y-0'>
                <main className='bg-sky-300 md:w-4/5 lg:w-3/4 px-5 py-5'>
                    {children}
                </main>
                <aside className='bg-green-300 md:w-1/5 lg:w-1/4 px-5 py-5'>
                    <h1 className='text-2xl md:text-4xl'>
                        Sidebar
                    </h1>
                </aside>
            </div>
        </>
    )
}
// 숫자값 * 4
// 레이아웃은 공통적인 웹 사이트의 양식 ==> {children} 속성을 활용하여 컴포넌트 내부에 다른 컴포넌트를 적용할 수 있다
export default Layout