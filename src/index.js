import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import AuthcontextProvider from './Context/AuthcontextProvider'

ReactDOM.render(
  <BrowserRouter>
    <AuthcontextProvider>
      <App />
    </AuthcontextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)

reportWebVitals()
