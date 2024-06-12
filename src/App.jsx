/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Skeleton from './skeleton/Skeleton'
import "./App.css"

const App = () => {
  const [loadingState, setLoadingState] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoadingState(true)
    }, 2000);
  }, [])

  const contentBlockData = () => {
    if (loadingState) {
      return [...Array(3)].map((item, index) => {
        return (
          <div key={index}>
            <h2>what is your name</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia provident molestias iste aliquam voluptatem consectetur, placeat laboriosam. Quas cumque doloribus incidunt cupiditate quam. Vel pariatur, et voluptas ex amet officia.</p>

          </div>
        )
      })
    } else {
      return [...Array(3)].map((item, index) => {
        return (
          <div className="skeletonBlock" key={index}>
            <Skeleton width="300px" height="38px" />
            <Skeleton height="20px" variant="paragraph" />
            <Skeleton height="20px" variant="paragraph" />
            <Skeleton height="20px" variant="paragraph" />
            <Skeleton width="50%" height="20px" variant="paragraph" />
          </div>
        )
      })
    }
  }

  const cardBlockData = () => {
    if (loadingState) {
      return [...Array(4)].map((item, index) => {
        return (
          <div className="cardSkeleton" key={index}>
            <div className="cardImageSkeleton">
              <Skeleton width="80px" height="80px" variant="circle" />
              <Skeleton width="100%" height="20px" />

            </div>
            <div className="cardTitleSkeleton">
              <Skeleton width="100%" height="30px" />

            </div>
            <div className="cardBodySkeleton">
              <Skeleton width="250px" height="300px" />

            </div>
          </div>
        )
      })
    } else {
      return [...Array(4)].map((item, index) => {
        return (
          <div className="cardSkeleton" key={index}>
            <div className="cardImageSkeleton">
              <Skeleton width="80px" height="80px" variant="circle" />
              <Skeleton width="100%" height="20px" />

            </div>
            <div className="cardTitleSkeleton">
              <Skeleton width="100%" height="30px" />

            </div>
            <div className="cardBodySkeleton">
              <Skeleton width="250px" height="300px" />

            </div>
          </div>
        )
      })
    }
  }
  return (
    <div className='App'>
      <h1>React Skeleton Loading  </h1>
      <div>
        <h2>Heading Skeleton </h2>
        {
          loadingState ? (
            <div className="heading">
              <h1>Heading1</h1>
              <h2>Heading2</h2>
              <h3>Heading3</h3>
            </div>
          ) : (
            <div className='skeletonBlock'>

              <Skeleton width="200px" height="38px" />
              <Skeleton width="150px" height="28px" />
              <Skeleton width="200px" height="38px" />
            </div>

          )
        }
        <div>
          <h2>Content Skeleton</h2>
          <div className="contentBlock">
            {
              contentBlockData()
            }

          </div>
          <div>
            <h2>card skeleton</h2>
            <div className="cardBlcok">
              {
                cardBlockData()
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App