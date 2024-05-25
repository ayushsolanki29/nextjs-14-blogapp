import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Lorem ipsum dolor sit.</p>
      <Link href={"/"}>Return Home</Link>
    </div>
  )
}

export default NotFound
