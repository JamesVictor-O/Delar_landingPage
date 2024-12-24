import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import {ThemeProvider} from "next-themes"

createRoot(document.getElementById('root')!).render(
  <ThemeProvider attribute="class">

  <StrictMode>
    <App />
  </StrictMode>,
  </ThemeProvider>
)
