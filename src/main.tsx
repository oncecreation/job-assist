import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'

const container = document.getElementById('root')
const rootNode = createRoot(container)
rootNode.render(<App />)
