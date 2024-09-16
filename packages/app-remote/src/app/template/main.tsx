import { createRoot } from 'react-dom/client'
import App from './application.tsx'
import '../styles.css'

createRoot(document.getElementById('root')!).render(
    <App />
)