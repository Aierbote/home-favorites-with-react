import "./App.css";
import { FC, memo, useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { CardsGrid } from "./CardsGrid";

const App: FC = memo((): JSX.Element => {
	const [isWhere, setIsWhere] = useState<"home" | "favorites">("home");

	const onClickGoHome = () => {
		setIsWhere("home");
	};

	const onClickGoFavorites = () => {
		setIsWhere("favorites");
	};

	return (
		<>
			<Header
				onClickGoHome={onClickGoHome}
				onClickGoFavorites={onClickGoFavorites}
			/>
			{isWhere === "home" && <Form />}
			<CardsGrid>
				{isWhere === "home" && "list of all cards"}
				{isWhere === "favorites" && "list of favorites"}
			</CardsGrid>
		</>
	);
});

export default App;
