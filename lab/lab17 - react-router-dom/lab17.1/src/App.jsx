import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home'
import QuotesPage from './pages/Quotes'
import QuoteDetail from './pages/QuoteDetail'
import QuoteNew from './pages/QuoteNew'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'quotes', element: <QuotesPage /> },
      { path: 'quotes/:id', element: <QuoteDetail /> },
      { path: 'quotes/new-quote', element: <QuoteNew /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
