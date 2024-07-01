**REACT**

**- React là 1 thư viện javascript phổ biển dùng để xây dựng giao diện người dùng (UI)**

**- Component:**

- Là các khối xây dựng cơ bản trong React.
- Mỗi component là 1 phần của giao diện và có thể tái sử dụng.
- Có 2 loại component:
  -> Function component - được viết dưới dạng hàm (function) javascript, dễ hiểu và gọn gàng.
  -> Class component - được viết dưới dạng lớp (class) javascript, không còn được dùng phổ biến vì sự tiện dụng của hooks.

**- JSX (Javascript XML):**

- Là cú pháp mở rộng cho javascript, cho phép viết mã HTML trong javascript để dễ đọc và dễ viết hơn.
- VD: const element = <h3>Hello world!</h3>

**- State:**

- State dùng để quản lý dữ liệu trong Component, nó là trạng thái động của Component.

**- Props:**

- Viết tắt của properties, dùng để truyền dữ liệu từ Component cha sang Component con.
- Props là immutable (không thay đổi), tức là component con không thể thay đổi giá trị của props, chỉ thay đổi trong component cha.

**- Ref:**

- Là 1 hook cho phép truy cập trực tiếp vào DOM hoặc các thành phần con của nó.
- Được sử dụng khi cần thao tác trực tiếp với 1 phần tử DOM, ví dụ focus thẻ input, đo lường kích thước hoặc vị trí của phần tử DOM.

**- Lifecycle Methods:**

- Là các phương thức để thực hiện tác vụ trong giai đoạn khác nhau của vòng đời của 1 component.
- Hỗ trợ để chạy mã vào những thời điểm cụ thể trong quá trình tồn tại của component.
- Quản lý các state, tối ưu hiệu suất và thực hiện các tác vụ như call API, cleanup function.
- Class Component Lifecycle Methods:
  _-> Mounting (Giai đoạn mount):_

  ```js
  constructor(props) {
      super(props)
      this.state = {count: 0}
    }
  ```

  Khởi tạo state và bind các phương thức, được gọi trước khi component được mounted.

  ```js
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.someValue !== prevState.someValue) {
      return {someState: nextProps.someValue}
    }
      return null
    }
  ```

  Được gọi ngay trước khi render, cả khi mounting và updating, dùng để đồng bộ state với props.

  ```js
  render () {
    return <div>{this.state.count}</div>
  }
  ```

  Phương thức bắt buộc, trả về JSX hoặc React elements. Chạy khi mounting và updating.

  ```js
  componentDidMount () {
  // Fetch data or add event listeners.
  }
  ```

  Được gọi sau khi component được render và thêm vào DOM. Dùng để thực hiện các tác vụ như gọi API.

  _-> Updating (Giai đoạn update):_
  Khi component nhận props mới hoặc state thay đổi.

  ```js
  state getDerivedStateFromProps(props, state)
  ```

  ```js
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count
  }
  ```

  Quyết định có nên render lại Component hay không, trả về true hoặc false

  ```js
  render()
  ```

  ```js
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }
  ```

  Được gọi ngay khi thay đổi DOM, trả về 1 giá trị nào đó hoặc null.

  ```js
  componentDidUpdate(prevProps, prevState, snapshot) {
    // Perform side effect
  }
  ```

  Được gọi sau khi component được cập nhật, dùng để làm các tác vụ sau khi update như gọi API.

  _-> Unmounting (Giai đoạn unmount):_
  Khi component bị gỡ khỏi DOM

  ```js
  componentWillUnmount() {
    // Clean up resources
  }
  ```

  Được gọi ngay trước khi component bị unmount. Dùng để dọn dẹp các sự kiện hoặc huỷ bỏ các yêu cầu API.

  _-> Error handling (Xử lý lỗi):_
  Khi component con hoặc bản thân component gặp lỗi

  ```js
  static getDerivedStateFromError(error) {
    return {hasError: true}
  }
  ```

  Được gọi khi component con gặp lỗi, cập nhật state để hiển thị fallback UI

  ```js
  componentDidCatch(error, info) {
    // Log the error
    }
  ```

  Được gọi khi component con gặp lỗi, dùng để ghi log lỗi hoặc thực hiện xử lý lỗi

- Function Component Lifecycle với Hooks:
  _-> Mounting and Updating:_

  - useEffect():
    -> Kết hợp các phương thức componentDidMount, componentDidUpdate, componentWillUnmount.
    -> Dùng để thực hiện các tác vụ sau khi component render.

    ```js
    useEffect(() => {
      // Component did mount/update logic
      return () => {
        // Component will unmount logic
      }
    }, [count]) // Runs when count change
    ```

    useEffect với dependency array []: Chạy 1 lần khi component mount (componentDidMount)
    -> thực hiện các tác vụ thay đổi UI, state, call API, đăng ký eventListener,...
    useEffect với dependency array [dependency]: Chạy khi dependency thay đổi (componentDidUpdate)
    -> thực hiện các tác vụ thay đổi state, UI,...
    useEffect với Cleanup function: Cleanup được gọi trước khi component unmount hoặc trước khi chạy lại hiệu ứng (componentWillUnmount)
    -> thực hiện các tác vụ như cleanup eventListener,...

**- Performance Methods:**

- Function Component:
  memo()

  - Ngăn component render lại khi không có thay đổi trong props.

  ```js
  const Component = memo((props) => {
    return <></>
  })
  ```

  useCallback()

  - Giữ lại phiên bản của hàm giữa các lần render để tránh việc tạo hàm mới không cần thiết.
  - Là 1 hàm xử lý các tác vụ và có props hoặc state phụ thuộc.

  ```js
  const memolizedCallback = useCallback(() => {
    // Hàm này chỉ thay đổi khi someProp thay đổi
    console.log(someProp)
  }, [someProp])
  ```

  useMemo()

  - Lưu lại giá trị tính toán để tránh việc tính toán lại giá trị nếu dependencies không thay đổi.
  - Là 1 biến giá trị bình thường được trả về tính toán theo props hoặc state.

  ```js
  const memolizedValue = useMemo(() => {
    return someExpensiveCalculation(someProp)
  }, [someProp])
  ```

  lazy & suspense

  - Cho phép tải component 1 cách lười biếng, giúp giảm kích thước bundle ban đầu.

  ```js
  const LazyComponent = lazy(() => import('./LazyComponent'))

  const MyComponent = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    )
  }
  ```

**- Context API**

- Là tính năng dùng để quản lý State toàn cục, giúp tránh việc truyền props qua nhiều cấp Component.
- Tạo Context:

```js
  -> const MyContext = createContext(defaultValue)
```

- Sử dụng Provider:
  -> Provider cung cấp giá trị context cho các Component con. Bao bọc các Component với Provider và truyền giá trị muốn cung cấp qua props value
  ```js
  const [theme, setTheme] = useState('light')
  const App = () => {
    return (
      <MyContext.Provider value={{ theme, setTheme }}>
        <ChildrenComponent />
      </MyContext.Provider>
    )
  }
  ```
- Tiêu thụ Context với useContext:

```js
  -> const value = useContext(MyContext)
```

**- Redux:**

- Redux là 1 thư viện javascript để quản lý state trong các ứng dụng web nói chung và react nói riêng.
- Nó giúp quản lý trạng thái ứng dụng 1 cách dễ dự đoán, dễ debug, và dễ test.

- Kiến trúc của redux:
  -> Store:

  - Là nơi lưu trữ toàn bộ state của ứng dụng.
  - Mỗi ứng dụng chỉ có 1 store duy nhất.
    -> Action:
  - Là 1 object mô tả một sự kiện (event) xảy ra trong ứng dụng.
  - Action có 1 type bắt buộc (mô tả hành động) và có thể có payload (dữ liệu bổ sung).
    -> Reducer:
  - Một function nhận vào state hiện tại và 1 action, sau đó trả về state mới.
  - Reducer không thay đổi state trực tiếp mà trả về 1 bản sao mới của state.
    -> Dispatch:
  - Phương thức để gửi actions đến store.
  - dispatch(action) kích hoạt các reducer để tính toán state mới dựa trên action đó.
    -> Selector:
  - Một function để truy vấn và lấy dữ liệu từ state.
  - Selector giúp giảm phụ thuộc vào cấu trúc của state và cải thiện khả năng tái sử dụng code.
    -> Middleware:
  - Cầu nối giữa dispatch và action trong redux.
  - Có thể call API, thực hiện các tác vụ không đồng bộ như fetch,...
  - Logging:
  - Điều chỉnh action: Thay đổi hoặc lọc các hành động trước khi chúng đến reducers.

- Ví dụ:

```js
  `actions.js`
    export const increment = () => ({type: 'INCREMENT'})
    export const decrement = () => ({type: 'DECREMENT'})

  `reducer.js`
    const initialState = {count: 0}
    const counterReducer = (state = initialState, action) => {
      switch(action.type) {
        case 'INCREMENT':
          return {...state, count: state.count + 1}
        case 'DECREMENT':
          return {...state, count: state.count - 1}
        default:
          return state
      }
    }
    export default counterReducer

  `store.js`
    import {createStore} from 'redux'
    import counterReducer from './reducer'
    const store = createStore(counterReducer)
    export default store

  `App.jsx`
    import {Provider, useSelector, useDispatch} from 'react-redux'
    import store from './store'
    import {increment, decrement} from './action'

    const Counter = () => {
      const count = useSelector((state) => state.count)
      const dispatch = useDispatch()
      return <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    }
    const App = () => {
      <Provider store={store}>
        <Counter />
      </Provider>
    }
    export default App
```

**- Redux-toolkit:**

- Là thư viện giúp đơn giản hoá việc quản lý state với Redux

- Ví dụ:

```js
;`counter.js`
const initialState = 0
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.count += 1
    },
    decrement: (state, { payload }) => {
      state.count -= 1
    }
  }
})
export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer`store.js`
const store = configureStore({
  reducer: {
    count: counterReducer
  }
})
export default store
```

**- React-router-dom**

- Là thư viện quản lý điều hướng trong ứng dụng React.
- Cho phép ta điều hướng giữa các trang hoặc chế độ xem khác nhau trong ứng dụng 1 cách mượt mà mà không cần tải lại trang.

- Ví dụ:

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'detail/:product-id', element: <DetailPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> }
    ]
  },
  { path: 'login', element: <LoginPage /> },
  { path: 'register', element: <RegisterPage /> }
])

const App = () => {
  return <RouterProvider router={router} />
}
```
