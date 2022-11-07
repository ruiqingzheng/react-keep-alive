import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{ display: 'flex', borderBottom: 'solid 1px', paddingBottom: '15px', margin: '10px' }}>
      <div style={{ marginRight: '5px' }}>
        {/* <a href="/demo/cache-demo">cache-demo </a> */}
        <Link to={'/'}> home </Link>
      </div>
      <div style={{ marginRight: '5px' }}>
        {/* <a href="/demo/cache-demo">cache-demo </a> */}
        <Link to={'/keepalive-demo'}> keepalive-demo </Link>
      </div>
      <div>
        {/* <a href="/demo/keepalive-demo">keepalive-demo </a> */}
        <Link to={'/cache-demo'}> cache-demo </Link>
      </div>
    </div>
  )
}
