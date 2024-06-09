import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home'
import QuotesPage from './pages/Quotes'
import QuoteDetail from './pages/QuoteDetail'
import QuoteNew from './pages/QuoteNew'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'quotes',
        children: [
          {index: true, element: <QuotesPage />},
          {path: ':id', element: <QuoteDetail />},
          {path: 'new-quote', element: <QuoteNew />},
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
