/**
 * To get any kind of object stored in `localStorage`
 * @param item string of the thing you need to retrive in `localStorage`
 * @returns an `Array<T>` where `T` is a generic Type, placeholder for something like a `CardData` or any other type I might need later on.
 */
export const utilityGetFromStorage = <T>(item: string): T[] => {
	const storedString = localStorage.getItem(item) || "";
	const storedItem: Array<T> = !!storedString ? JSON.parse(storedString) : [];
	return storedItem;
};

/**
 *
 * @param item string of the thing you need to retrive in `localStorage`
 * @param obj  an `Array<T>` where `T` is a generic Type, to insert something like a `CardData` or any other type I might to save for later.
 */
export const utilitySaveToStorage = <T, U>(item: string, obj: U): void => {
	const oldItem = utilityGetFromStorage<T>(item);

	const newItem = [...oldItem, obj];

	localStorage.setItem(item, JSON.stringify(newItem));
};
