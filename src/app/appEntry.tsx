import * as React from 'react'
import { StrictMode } from 'react'

import BaseLayout from '@/app/layouts/BaseLayout'
import { createRoot } from 'react-dom/client'

import './styles/global.scss'

createRoot(document.getElementById('root') as HTMLElement).render(<BaseLayout />)
