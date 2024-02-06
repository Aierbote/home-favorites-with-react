import { CardProps, TypeMyContext } from "./declaration";

/*
LocalStorage {
	// stringOfdocument: element{} | element[]
	"allCards": CardProps[]
	"likedCards": idCard[]
}
*/

/**
 * To get any kind of object stored in `localStorage`
 * @param document string of the thing you need to retrive in `localStorage`
 * @returns something like a `CardData` or any other types I might need later on.
 */
export const utilityGetFromStorage = (
	document: string
): Array<CardProps | boolean> => {
	const cachedDocument = localStorage.getItem(document) || "";
	const parsedDocument = !!cachedDocument ? JSON.parse(document) : [];
	return parsedDocument;
};

/**
 * To save any kind of object in `localStorage` as new `obj` inside the array of the `item` already inside storage.
 * @param document string of the thing you need to retrive in `localStorage`
 * @param elem  an `Array<T>` where `T` is a generic Type, to insert something like a `CardData` or any other type I might to save for later.
 */
export const utilitySaveToStorage = (
	document: string,
	elem: TypeMyContext["likedCards"] | TypeMyContext["contentCards"]
): void => {
	const prevDocument = utilityGetFromStorage(document);

	const newItem = [...prevDocument, elem];

	localStorage.setItem(document, JSON.stringify(newItem));
};

// export const utilityUpdateInStorage = (item: string, id: string) => {
// 	const oldItem = utilityGetFromStorage(item);
// 	const oldElem = oldItem;
// 	console.log(oldItem);
// };
