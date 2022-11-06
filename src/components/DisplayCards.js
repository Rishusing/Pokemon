import { lazy, Suspense } from 'react'
import './CardStyle.css'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LazyCard = lazy(() => import('./Card'))

const DisplayCards = ({ images }) => {
  return (
    <div className="cards">
      {images.map((data) => (
        <Suspense
          key={data.id}
          fallback={
            <div>
              <Skeleton height="300px" width="400px" />
              <h4 className="card-title">
                <Skeleton height={36} width={`80%`} />
              </h4>
            </div>
          }
        >
          <LazyCard data={data} />
        </Suspense>
      ))}
    </div>
  )
}

export default DisplayCards
