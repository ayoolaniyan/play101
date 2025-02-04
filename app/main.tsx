import { MediatoolThemeProvider } from '@northlight/ui'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/app'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<MediatoolThemeProvider><BrowserRouter><App /></BrowserRouter></MediatoolThemeProvider>)
