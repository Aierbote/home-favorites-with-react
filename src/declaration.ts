/* Props */

export interface HeaderProps {
	children?: any;
	onClickGoHome: () => void;
	onClickGoFavorites: () => void;
}

export interface GridProps {
	children?: any;
	allCards: Array<CardProps>;
}

export interface CardProps {
	id?: string;
	imgUrl: string;
	title?: string;
	summary: string;
}

export interface FormProps {
	onCardSubmit: (newCard: CardProps) => void;
}

/* Context of states, props and stored documents */

export interface TypeMyContext {
	likedCards: Array<string>;
	contentCards: Array<{
		id: string;
		imgUrl: string;
		title: string;
		summary: string;
	}>;
	onCardSubmit: (newCard: TypeMyContext["contentCards"][number]) => void;
}
