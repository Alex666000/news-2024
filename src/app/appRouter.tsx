import { createBrowserRouter } from 'react-router-dom'

import { MainPage } from '@/pages/main/ui/MainPage/MainPage'
import { ProductsPage } from '@/pages/products'

import BaseLayout from './layouts/BaseLayout'

export const appRouter = createBrowserRouter([
  {
    children: [
      // либо эту страницу или эту.
      // children - это чилды BaseLayout
      { element: <MainPage />, path: '/' },
      { element: <ProductsPage />, path: '/products/:id' },
    ],
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
  },
])
