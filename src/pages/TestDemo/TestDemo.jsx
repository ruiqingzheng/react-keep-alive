import React, { Suspense, useState, lazy, useCallback } from 'react'
const TabA = lazy(() => import('../../components/TestA'))
const TabB = lazy(() => import('../../components/TestB'))

export default function TestDemo() {
  const [currentTab, setCurrentTab] = useState('tabA')

  const changeTab = useCallback(
    (tabName) => {
      setCurrentTab(tabName)
    },
    [setCurrentTab]
  )

  return (
    <Suspense fallback={<h2>loading.....</h2>}>
      <>
        <div>
          <button onClick={() => changeTab('tabA')}>tabA</button>
          <button onClick={() => changeTab('tabB')}>tabB</button>
        </div>
        <div>{currentTab === 'tabA' ? <TabA /> : currentTab === 'tabB' ? <TabB /> : <>no such tab</>}</div>
      </>
    </Suspense>
  )
}
