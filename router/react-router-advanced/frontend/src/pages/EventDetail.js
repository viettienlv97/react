import React from 'react'
import {
  useLoaderData,
  json,
  useRouteLoaderData,
  redirect
} from 'react-router-dom'
import EventItem from '../components/EventItem'

const EventDetail = () => {
  const data = useRouteLoaderData('event-detail')
  const event = data?.event
  console.log(event)
  return <EventItem event={event} />
}

export default EventDetail

export const loader = async ({ request, params }) => {
  const id = params.id
  const res = await fetch('http://localhost:8080/events/' + id)
  if (!res.ok) {
    throw json(
      { message: 'Could not fetch details for selected Event.' },
      {
        status: 500
      }
    )
  } else {
    return res
  }
}

export const action = async ({ params, request }) => {
  const id = params.id
  const res = await fetch('http://localhost:8080/events/' + id, {
    method: request.method
  })

  if (!res.ok) {
    throw json(
      { message: 'Could not delete event.' },
      {
        status: 500
      }
    )
  }

  return redirect('/events')
}
