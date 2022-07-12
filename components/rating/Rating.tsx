import tw from "twin.macro";

import { useMemo } from "react";

import FullStar from "./../../assets/icons/full-star.svg";
import HalfStar from "./../../assets/icons/half-star.svg";
import EmptyStar from "./../../assets/icons/empty-star.svg";

type RatingProps = {
  score?: number;
};

export const Rating = ({ score }: RatingProps) => {
  const scoreStars = useMemo(() => {
    let stars = [];
    let tmpScore = 0;
    for (let index = 0; index < 5; index++) {
      console.log(tmpScore);
      if (tmpScore + 1 <= score) {
        tmpScore = tmpScore + 1;
        stars.push(1);
      } else if (tmpScore + 0.5 <= score) {
        tmpScore = tmpScore + 0.5;
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }

    return stars;
  }, [score]);

  console.log(scoreStars);

  return (
    <div tw="flex items-center">
      {scoreStars.map((_v, idx) =>
        _v === 1 ? (
          <FullStar key={idx} />
        ) : _v === 0.5 ? (
          <HalfStar key={idx} />
        ) : (
          <EmptyStar key={idx} />
        )
      )}
    </div>
  );
};
