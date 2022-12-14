import React, { useState } from 'react'
import KeepAlive, { AliveScope } from './KeepAlive'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      count:{count}
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </div>
  )
}

export default function KeepAliveDemo() {
  const [show, setShow] = useState(true)
  return (
    <AliveScope>
      <div>
        <button onClick={() => setShow((show) => !show)}>Toggle</button>
        <p>无 KeepAlive</p>
        {show && <Counter />}
        <p>有 KeepAlive</p>
        {show && (
          <KeepAlive id="Test">
            <Counter />
          </KeepAlive>
        )}
      </div>
    </AliveScope>
  )
}
