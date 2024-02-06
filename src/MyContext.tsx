import { FC } from "react";
import { ReactNode, createContext, useContext, useState } from "react";
import { TypeMyContext } from "./declaration";

const AppContext = createContext<TypeMyContext | null>(null);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [likedCards, contentCards] = useState<TypeMyContext>({
		likedCards: [],
		contentCards: [],
	});

	return (
		<AppContext.Provider value={{ likedCards, contentCards }}>
			{children}
		</AppContext.Provider>
	);
};
