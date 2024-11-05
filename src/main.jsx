import { StrictMode } from 'react'
import { Provider } from "/src/components/ui/provider"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider>
    <App />
  </Provider>
  </StrictMode>,
)
