import React, {useState} from 'react'
import UseEffectCounter from './UseEffectCounter'

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={
            () => {
                // whatever display is set to currently, this will set to the opposite
                setDisplay(!display)
            }
        }>
            Toggle Display
        </button>
        {/* this says to render UseEffectCounter if display is true */}
        {display && <UseEffectCounter />}
    </div>
  )
}

export default UseEffectCounterContainer