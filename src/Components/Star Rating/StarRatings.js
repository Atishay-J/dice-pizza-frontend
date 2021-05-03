import StarSharpIcon from "@material-ui/icons/StarSharp";

export default function StarRatings({ starred, stars, starredCol, starsCol }) {
  let starsArr = [];
  let i = 0;
  while (i < stars) {
    starsArr.push(i);
    i++;
  }
  return (
    <div className="StarRatingsContainer">
      {starsArr.map((item, index) => {
        if (item < starred) {
          return <StarSharpIcon style={{ color: starredCol }} key={index} />;
        }
        return <StarSharpIcon style={{ color: starsCol }} key={index} />;
      })}
    </div>
  );
}
