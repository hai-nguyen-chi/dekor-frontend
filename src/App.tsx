import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, NotFound } from '@/pages/index.ts'
import { UserLayout } from '@/layouts/index.ts'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
