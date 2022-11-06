import React, { lazy, Suspense } from 'react'
import './CardStyle.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LazyImage = lazy(() => import('./Image'))

const Card = ({ data }) => {
  return (
    <div className="card" key={data.id}>
      <Suspense fallback={<Skeleton height="300px" width="90%" />}>
        <LazyImage url={data.webformatURL} />
      </Suspense>

      <h2>{data.tags}</h2>
      <h3>{data.user}</h3>
    </div>
  )
}

export default Card
