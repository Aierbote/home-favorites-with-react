import "./App.css";
import { FC, memo, useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { CardsGrid } from "./CardsGrid";

const App: FC = memo((): JSX.Element => {
	const [isInHome, setIsInHome] = useState(true);

	const onClickGoHome = () => {
		setIsInHome(true);
	};

	const onClickGoFavorites = () => {
		setIsInHome(false);
	};

	return (
		<>
			<Header
				onClickGoHome={onClickGoHome}
				onClickGoFavorites={onClickGoFavorites}
			/>
			{isInHome ? <Form /> : null}
			<CardsGrid>
				{isInHome ? "list of all cards" : "list of favorites"}
			</CardsGrid>
		</>
	);
});

export default App;
