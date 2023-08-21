"use client"

import React from 'react'
import ErrorPage from 'src/components/NotFound'

const NotFound = ():JSX.Element => {
  return (
    <div>
      <ErrorPage statusCode={404} />
    </div>
  );
}

export default NotFound

