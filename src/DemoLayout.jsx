import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

export default function DemoLayout() {
  return (
    <>
      <h2>demo layout</h2>
      <Header></Header>
      <Outlet />
    </>
  )
}
