import placeholder from "../../assets/images/cities/default-image.jpg";

import { Weather } from "../Weather";

import "./_card.scss";

interface CardProps {
  selectedCity?: {
    id: number;
    name: string;
    image: string;
    author: string;
  };
}

export const Card = ({ selectedCity }: CardProps) => {
  return (
    <div className="card">
      <figure className="card__figure">
        <img
          className="card__image"
          src={selectedCity?.image || placeholder}
          alt={`Photography by ${selectedCity?.author || `Sorasak`}`}
        />
      </figure>
      {selectedCity?.id && <Weather cityId={selectedCity.id} />}
    </div>
  );
};
