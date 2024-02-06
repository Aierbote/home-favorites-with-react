import "./App.css";
import { FC, memo, useEffect, useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { CardsGrid } from "./CardsGrid";
import { TypeMyContext } from "./declaration";
import { utilityGetCardsFromStorage } from "./utility";
import { AppProvider } from "./MyContext";

const App: FC = memo((): JSX.Element => {
	const [isWhere, setIsWhere] = useState<"home" | "favorites">("home");

	const onClickGoHome = () => {
		setIsWhere("home");
	};

	const onClickGoFavorites = () => {
		setIsWhere("favorites");
	};

	return (
		<AppProvider
		// value={{
		// 	likedCards, // likedCards
		// 	allCards, // contentCards
		// }}
		>
			<Header
				onClickGoHome={onClickGoHome}
				onClickGoFavorites={onClickGoFavorites}
			/>
			{isWhere === "home" && <Form />}
			<CardsGrid allCards={allCards}>
				{isWhere === "home" && "list of all cards"}
				{isWhere === "favorites" && "list of favorites"}
			</CardsGrid>
		</AppProvider>
	);
});

export default App;
