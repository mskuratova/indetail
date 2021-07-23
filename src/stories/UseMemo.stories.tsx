import React, {useCallback, useMemo, useState} from "react";

export default {
    title:"useMemo",
}

export const DifficultCountingExample =() => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1
    resultA = useMemo(()=>{
    for (let i = 1; i <= a; i++) {
        resultA = resultA * i;
    } return resultA
    },[a] )

    for (let i = 1; i <= b; i++) {
        resultB = resultB *i;
    }

    return<>
    <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
    <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props:{users: Array<string>}) => {
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div> )}
    </div>
}
const Users = React.memo(UsersSecret)
export const HelpsToReactMemo =() => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState(["Dimych", "Valera"])
const newArray = useMemo(() => {
    return users.filter(u=> u.toLowerCase().indexOf("a") > -1)
}, [users])

    return<>
     <button onClick={() => setCounter(counter+1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}
export const LikeUseCallback =() => {
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState(["React", "JS"])
    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [books])
    const addBook = () => {
        const newBook = [...books, "Angular" + new Date().getTime()];
        setBooks(newBook)
    }
    const memoizedBook = useMemo(() => {
        return addBook
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArray} addBook={addBook}/>
    </>


    const memoizedAddBook2 = useCallback(() => {
        const newBooks = [...books, "Angular" + new Date().getTime()];
        setBooks(newBooks)
    }, [books]);
}
const BooksSecret = (props:{books: Array<string>; addBook:() => void}) => {
    return <div>
        <button onClick={() =>props.addBook()}>add book</button>
        {props.books.map((b,i) => <div key={i}>{b}</div> )}
    </div>
}
const Book = React.memo(BooksSecret)