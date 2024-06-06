import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import ErrorPage from './pages/Error'
import ProductDetail from './pages/ProductDetail'

const router = createBrowserRouter([
  // {
  //   // nếu path là /root thì sẽ bị lỗi vì path / không thể là path con của /root
  //   path: '/',
  //   element: <RootLayout />,

  //   children: [
  //     // absolute path
  //     { path: '/', element: <HomePage /> },
  //     { path: '/products', element: <ProductsPage /> },
  //     { path: '/products/:productId', element: <ProductDetail /> }
  //   ],
  //   errorElement: <ErrorPage />
  // },
  // ví dụ sử dụng path có tên là /root
  // {
  //   path: '/root',
  //   element: <RootLayout />,
  //   children: [
  //     // relative path
  //     { path: '', element: <HomePage /> },
  //     { path: 'products', element: <ProductsPage /> },
  //     { path: 'products/:productId', element: <ProductDetail /> }
  //   ]
  // },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // relative path
      // { path: '', element: <HomePage /> },
      // thay vì sử dụng path: '' thì có thể dùng index
      { index: true, element: <HomePage /> }, //path=''
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetail /> }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
