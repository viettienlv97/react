// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage v
//    - EventsPage v
//    - EventDetailPage v
//    - NewEventPage v
//    - EditEventPage v
// 2. Add routing & route definitions for these five pages
//    - / => HomePage v
//    - /events => EventsPage v
//    - /events/<some-id> => EventDetailPage v
//    - /events/new => NewEventPage v
//    - /events/<some-id>/edit => EditEventPage v
// 3. Add a root layout that adds the <MainNavigation> component above all page components v
// 4. Add properly working links to the MainNavigation v
// 5. Ensure that the links in MainNavigation receive an "active" class when active v
// 6. Output a list of dummy events to the EventsPage v
//    Every list item should include a link to the respective EventDetailPage v
// 7. Output the ID of the selected event on the EventDetailPage v
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import HomePage from './pages/Home'
import {action as deleteEventAction} from './pages/EventDetail'
import NewEventPage, {action as newEventAction} from './pages/NewEvent'
import EditEventPage from './pages/EditEvent'
import EventRootLayout from './pages/EventRoot'
import ErrorPage from './pages/Error'
import {lazy, Suspense} from 'react'

const EventsPage = lazy(() => import('./pages/Events'))
const EventDetailPage = lazy(() => import('./pages/EventDetail'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'events',
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <EventsPage />
              </Suspense>
            ),
            loader: (meta) =>
              import('./pages/Events').then((module) => module.loader(meta)),
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: (meta) =>
              import('./pages/EventDetail').then((module) =>
                module.loader(meta)
              ),
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <EventDetailPage />
                  </Suspense>
                ),
                action: deleteEventAction,
                // loader: eventDetailLoader
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                // loader: eventDetailLoader
              },
            ],
          },

          {path: 'new', element: <NewEventPage />, action: newEventAction},
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
