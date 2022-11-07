import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import Header from './components/Header'
import TestDemo from './pages/TestDemo/TestDemo'
const KeepAliveDemo = lazy(() => import('./pages/KeepAliveDemo/KeepAliveDemo'))
const RefCacheDemo = lazy(() => import('./pages/RefCacheDemo/RefCacheDemo'))
// const TestDemo = lazy(() => import('./pages/TestDemo/TestDemo'))

const InnerA = () => {
  return <h2>inner A</h2>
}
const InnerB = () => {
  return <h2>inner B</h2>
}

const CacheRouteLayout = () => (
  <Suspense fallback={<h2>loading.....</h2>}>
    <Router>
      <Header></Header>
      <CacheSwitch>
        <Route exact path="/" component={TestDemo} />
        <CacheRoute exact path="/keepalive-demo" component={KeepAliveDemo} />
        <CacheRoute exact path="/cache-demo" component={RefCacheDemo} />
        <Route render={() => <div>404 Not Found</div>} />
      </CacheSwitch>
    </Router>
  </Suspense>
)

export default CacheRouteLayout
