import "./skeletonCard.css";

import Skeleton from "react-loading-skeleton";

export default function SkeletonCard() {
  return (
    <>
      <div className="skeletonWrapper">
        {Array(9)
          .fill()
          .map((item, index) => (
            <div className="skeletonCardContaier" key={index}>
              <div className="skeletonImage">
                <Skeleton height={`100%`} width={`100%`} />
              </div>
              <h1 className="skeletonHeading">
                <Skeleton />
              </h1>
              <p className="skeletonPara">
                <Skeleton count={2} />
              </p>
              <div className="skeletonBtn">
                <Skeleton />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
