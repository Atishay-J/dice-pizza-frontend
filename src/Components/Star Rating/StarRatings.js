import StarSharpIcon from "@material-ui/icons/StarSharp";

export default function StarRatings({
  starred,
  stars = 5,
  activeColor,
  color,
}) {
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
          return <StarSharpIcon style={{ color: activeColor }} key={index} />;
        }
        return <StarSharpIcon style={{ color: color }} key={index} />;
      })}
    </div>
  );
}
