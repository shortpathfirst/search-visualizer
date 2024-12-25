import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BubbleVisualizer from './BubbleVisualizer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BubbleVisualizer />
  </StrictMode>,
)
