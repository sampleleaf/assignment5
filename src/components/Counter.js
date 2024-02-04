

const Counter = ({ count, addOne, id }) => {
    return (
        <>
            <div>
                <button onClick={() => addOne(id)}>+ 1</button>
                <span>{count}</span>
            </div>
        </>
    )
}

export default Counter