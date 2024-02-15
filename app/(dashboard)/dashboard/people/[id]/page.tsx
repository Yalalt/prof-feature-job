import React from 'react'

export default async function Page({ params }:{ params: { id: string} }) {
    const { id } = params;

    await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
        <h1>Details</h1>
        <p>{id}</p>
    </div>
  )
}
