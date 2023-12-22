import {Route, Routes} from 'react-router-dom'
import Home from '../components/Home'
import Race from '../components/Race'
import Result from '../components/Result'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Race" element={<Race />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
