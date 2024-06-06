import React from 'react'
import EventsList from '../components/EventsList'
import { useLoaderData } from 'react-router-dom'

const EventsPage = () => {
  const data = useLoaderData()
  // Không sử dụng cách này
  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  const events = data.events
  return <EventsList events={events} />
}

export default EventsPage

export const loader = async () => {
  const res = await fetch('http://localhost:8080/events')
  if (!res.ok) {
    // Không sử dụng cách này
    // return { isError: true, message: 'Could not fetch events!' }
  } else {
    return res
  }
}
