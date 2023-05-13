import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CoursesSkeleton = () => {

    return(
        <section className='section courses'>
      <div className="container">
        <div className="thmtitle">
            <Skeleton height={36} width={`80%`} />
            <Skeleton width={`60%`} />
        </div>
        <div className="courses__grid">
            {Array(5).fill().map((item, index) => (
                <div className="courses__grid-box" key={index}>
                    <Skeleton height={200} />
                <div className="courses__content">
                    <div className="courses__content-tags">
                        <Skeleton width={`30%`} />
                        <Skeleton width={`30%`} />
                    </div>
                    <Skeleton height={36} width={`80%`} />
                    <Skeleton width={`100%`} />
                    <footer className="courses__content-footer">
                        <Skeleton width={`30%`} />
                        <Skeleton width={`30%`} />
                  </footer>
                </div>
            </div>
            ))}
        </div>
        <SkeletonTheme color="#990" highlightColor="#550">
  <p>
    <Skeleton height={250} width={300} count={1} />
  </p>

</SkeletonTheme>
      </div>
    </section>
    )
}

export default CoursesSkeleton