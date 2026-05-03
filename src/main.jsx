import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'

function resolveVariantKey() {
  if (typeof document === 'undefined') {
    return 'default'
  }

  return document.documentElement.dataset.landingVariant ?? 'default'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App variantKey={resolveVariantKey()} />
  </StrictMode>,
)
