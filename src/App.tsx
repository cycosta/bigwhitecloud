import { useState } from "react";
import "./index.scss";

import { Wrapper, Dropdown, Card, Copyright } from "./components";
import { cities } from "./data/cities";

export const App = () => {
  const [selectedCity, setSelectedCity] = useState<{
    id: number;
    name: string;
    image: string;
    author: string;
  }>();

  return (
    <Wrapper>
      <Dropdown
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <Card selectedCity={selectedCity} />
      <Copyright author={selectedCity?.author || "Sorasak"} />
    </Wrapper>
  );
};
