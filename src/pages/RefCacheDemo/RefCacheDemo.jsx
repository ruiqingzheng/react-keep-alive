import React, { useEffect, useRef, useState } from 'react'
const CachedComponent = ({ node }) => {
  console.log('node :>> ', node)
  const [placeholder, setPlaceholder] = useState()

  useEffect(() => {
    if (placeholder && node) {
      placeholder.appendChild(node)
    }
  })

  return (
    <div
      ref={(childNode) => {
        setPlaceholder(childNode)
      }}
    ></div>
  )
}

const RegularComponent = () => {
  return (
    <>
      <p>Regular Component</p>
    </>
  )
}

const CachedComponent2 = ({ node }) => {
  const placeholderRef = useRef()

  useEffect(() => {
    if (placeholderRef.current && node) placeholderRef.current.appendChild(node)
  }, [])
  return <div ref={placeholderRef}></div>
}

export default function TestRef() {
  const [cacheDom, saveCacheDom] = useState(null)
  const testRef = useRef(null)

  useEffect(() => {
    // console.log('testDom', testDom)
  }, [cacheDom])

  return (
    <div>
      <span>header</span>
      <RegularComponent></RegularComponent>
      <CachedComponent key={'102837987'} node={testRef.current}></CachedComponent>
      <CachedComponent node={cacheDom}></CachedComponent>
      <CachedComponent node={testRef.current}></CachedComponent>
      <CachedComponent2 key={'120937812'} node={testRef.current}></CachedComponent2>
      <CachedComponent node={cacheDom}></CachedComponent>
      <span>Other components</span>
      <div ref={testRef}>useRef cached dom</div>
      <div
        ref={(node) => {
          saveCacheDom(node)
        }}
      >
        callback ref cached dom
      </div>
    </div>
  )
}
