import "./App.css";
import { FC, memo, useEffect, useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { CardsGrid } from "./CardsGrid";
import { CardProps } from "./declaration";
import { utilityGetFromStorage } from "./utility";

const App: FC = memo((): JSX.Element => {
	const [isWhere, setIsWhere] = useState<"home" | "favorites">("home");
	const [allCards, setAllCards] = useState<Array<CardProps>>([]);

	const onClickGoHome = () => {
		setIsWhere("home");
	};

	const onClickGoFavorites = () => {
		setIsWhere("favorites");
	};

	const onCardSubmit = (newCard: CardProps) => {
		setAllCards(
			(oldCards: Array<CardProps>): Array<CardProps> => [...oldCards, newCard]
		);
	};

	useEffect(() => {
		const allStoredCards: Array<CardProps> = utilityGetFromStorage("allCards");

		setAllCards(allStoredCards);
	}, []);

	return (
		<>
			<Header
				onClickGoHome={onClickGoHome}
				onClickGoFavorites={onClickGoFavorites}
			/>
			{isWhere === "home" && <Form onCardSubmit={onCardSubmit} />}
			<CardsGrid allCards={allCards}>
				{isWhere === "home" && "list of all cards"}
				{isWhere === "favorites" && "list of favorites"}
			</CardsGrid>
		</>
	);
});

export default App;
