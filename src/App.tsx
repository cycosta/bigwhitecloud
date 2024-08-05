import { useState } from "react";

import { Wrapper, Logo, Dropdown, Card } from "./components";
import { cities } from "./data/cities";

export const App = () => {
  const [selectedCity, setSelectedCity] = useState<{
    id: number;
    name: string;
    image: string;
    alt: string;
  }>();

  return (
    <Wrapper>
      <Logo />
      <Dropdown
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <Card selectedCity={selectedCity} />
    </Wrapper>
  );
};
