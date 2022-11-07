import React from 'react'

export default function Header() {
  return (
    <div style={{display: 'flex', borderBottom:'solid 1px', paddingBottom:'15px', margin:'10px'}}>
      <div style={{marginRight: '5px'}}>
        <a href="/demo/cache-demo">cache-demo </a>
      </div>
      <div>
        <a href="/demo/keepalive-demo">keepalive-demo </a>
      </div>
    </div>
  )
}
