import "./App.css";
import { FC, memo, useEffect, useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { CardsGrid } from "./CardsGrid";
import { TypeMyContext } from "./declaration";
import { utilityGetCardsFromStorage } from "./utility";
import { AppProvider, CounterProvider } from "./MyContext";

const App: FC = memo((): JSX.Element => {
	const [isWhere, setIsWhere] = useState<"home" | "favorites">("home");
	const [allCards, setAllCards] = useState<TypeMyContext["contentCards"]>([]);
	const [likedCards, setLikedCards] = useState<TypeMyContext["likedCards"]>([]);

	const onClickGoHome = () => {
		setIsWhere("home");
	};

	const onClickGoFavorites = () => {
		setIsWhere("favorites");
	};

	const onCardSubmit = (newCard: TypeMyContext["contentCards"][number]) => {
		setAllCards((oldCards: TypeMyContext["contentCards"]) => [
			...oldCards,
			newCard,
		]);
	};

	useEffect(() => {
		const allStoredCards: TypeMyContext["contentCards"] =
			utilityGetCardsFromStorage();
		setAllCards(allStoredCards);
	}, []);

	return (
		<AppProvider
			value={{
				likedCards, // likedCards
				allCards, // contentCards
			}}
		>
			<Header
				onClickGoHome={onClickGoHome}
				onClickGoFavorites={onClickGoFavorites}
			/>
			{isWhere === "home" && <Form onCardSubmit={onCardSubmit} />}
			<CardsGrid allCards={allCards}>
				{isWhere === "home" && "list of all cards"}
				{isWhere === "favorites" && "list of favorites"}
			</CardsGrid>
		</AppProvider>
	);
});

export default App;
