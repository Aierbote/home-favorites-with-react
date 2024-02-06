import { CardProps, TypeMyContext } from "./declaration";

/*
LocalStorage {
	// stringOfdocument: element{} | element[]
	"allCards": CardProps[]
	"likedCards": idCard[]
}
*/

export const utilityGetCardsFromStorage = (): TypeMyContext["contentCards"] => {
	const cachedCards = localStorage.getItem("allCards") || "";
	const parsedCards = !!cachedCards ? JSON.parse(cachedCards) : [];
	return parsedCards;
};

export const utilitySaveCardsToStorage = (
	elem: TypeMyContext["contentCards"]
): void => {
	const prevCards = utilityGetCardsFromStorage();

	const newItem = [...prevCards, elem];

	localStorage.setItem("allCards", JSON.stringify(newItem));
};

export const utilityGetLikedCardsFromStorage =
	(): TypeMyContext["likedCards"] => {
		const cachedLikedCards = localStorage.getItem("allLikedCards") || "";
		const parsedLikedCards = !!cachedLikedCards
			? JSON.parse(cachedLikedCards)
			: [];
		return parsedLikedCards;
	};

export const utilitySaveLikedCardsToStorage = (
	elem: TypeMyContext["likedCards"]
): void => {
	const prevLikedCards = utilityGetLikedCardsFromStorage();

	const newItem = [...prevLikedCards, elem];

	localStorage.setItem("allLikedCards", JSON.stringify(newItem));
};

// export const utilityUpdateInStorage = (item: string, id: string) => {
// 	const oldItem = utilityGetFromStorage(item);
// 	const oldElem = oldItem;
// 	console.log(oldItem);
// };
