import "./App.css";
import { FC, memo, useEffect, useState, lazy, Suspense } from "react";
import { AppProvider } from "./MyContext";
const Header = lazy(() => import("./Header"));
const Form = lazy(() => import("./Form"));
const CardsGrid = lazy(() => import("./CardsGrid"));

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
			<Suspense fallback={<header>Loading Header...</header>}>
				<Header
					onClickGoHome={onClickGoHome}
					onClickGoFavorites={onClickGoFavorites}
				/>
			</Suspense>
			{isWhere === "home" && (
				<Suspense fallback={<div>Loading Form...</div>}>
					<Form />
				</Suspense>
			)}
			<Suspense fallback={<div>Loading Cards...</div>}>
				<CardsGrid>
					{isWhere === "home" && "list of all cards"}
					{isWhere === "favorites" && "list of favorites"}
				</CardsGrid>
			</Suspense>
		</AppProvider>
	);
});

export default App;
