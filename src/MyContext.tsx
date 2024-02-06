import { FC } from "react";
import { ReactNode, createContext, useContext, useState } from "react";
import { TypeMyContext } from "./declaration";

export const AppContext = createContext<TypeMyContext | null>(null);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
	// const [likedCards, contentCards] = useState<TypeMyContext>({
	// 	likedCards: [],
	// 	contentCards: [],
	// });

	const [contentCards, setContentCards] = useState<
		TypeMyContext["contentCards"]
	>([]);
	const [likedCards, setLikedCards] = useState<TypeMyContext["likedCards"]>([]);

	const onCardSubmit = (newCard: TypeMyContext["contentCards"][number]) => {
		setContentCards((oldCards: TypeMyContext["contentCards"]) => [
			...oldCards,
			newCard,
		]);
	};

	return (
		<AppContext.Provider value={{ contentCards, likedCards, onCardSubmit }}>
			{children}
		</AppContext.Provider>
	);
};
