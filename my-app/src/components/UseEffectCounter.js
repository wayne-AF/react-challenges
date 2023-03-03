import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0)
    // const [count2, setCount2] = useState(0)
    const [time, setTime] = useState(0)

    useEffect(() => {
        console.log('count 1 ran')
        document.title = count;
    });

    // useEffect(() => {
    //     console.log('count 2 ran')
    //     document.title = count2;
    // }, [count2])

    useEffect(() => {
        console.log('creating timer')
        const interval = setInterval(() => {
            console.log('interval executed')
            setTime(time => time + 1)
        }, 1000);
        // this unmounts the component and stops the interval continuing to run even when
        // display is toggled off
        // this mimics componentWillUnmount
        return () => {
            console.log('cleaning up')
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment count ({count})
            </button>
            {/* <button onClick={
                () => setCount2(count2 => count2 + 1)
            }>
                Increment count 2 ({count2})
            </button> */}
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter