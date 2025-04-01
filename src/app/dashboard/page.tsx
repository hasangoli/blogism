import { auth } from "@/auth";
import { Session } from "next-auth";
import React from 'react'

const UserDashboard = async() => {
  const session = (await auth()) as Session;

  console.log('session: ', session)
  return (
    <div>UserDashboard</div>
  )
}

export default UserDashboard
