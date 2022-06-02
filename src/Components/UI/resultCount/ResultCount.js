import React from 'react'

const ResultCount = ({ count }) => {
  return (
    <section className="container">
      <div className="search-result">
        <span>
          {count} widies found
        </span>
      </div>
    </section>
  )
}

export default ResultCount
