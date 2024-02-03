import "./App.css";
import { FC, memo, useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { CardsGrid } from "./CardsGrid";

const App: FC = memo((): JSX.Element => {
	const [isInHome, setIsInHome] = useState(true);

	return (
		<>
			<Header />
			<Form />
			<CardsGrid />
		</>
	);
});

export default App;
