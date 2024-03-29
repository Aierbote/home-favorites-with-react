/* Props */

export interface HeaderProps {
	children?: any;
	onClickGoHome: () => void;
	onClickGoFavorites: () => void;
}

export interface GridProps {
	children?: any;
	allCards?: Array<CardProps>;
	toggleLikeInCard?: (
		idkyeOfCard: TypeMyContext["contentCards"][number]["id"]
	) => void;
}

export interface CardProps {
	id: string;
	imgUrl: string;
	title?: string;
	summary: string;
	toggleLikeInCard?: (
		idkyeOfCard: TypeMyContext["contentCards"][number]["id"]
	) => void;
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
		title?: string;
		summary: string;
		toggleLikeInCard: (
			idkyeOfCard: TypeMyContext["likedCards"][number]
		) => void;
	}>;
	onCardSubmit: (newCard: TypeMyContext["contentCards"][number]) => void;
	setLikedCards: (idkyeOfCard: TypeMyContext["likedCards"]) => void;
	toggleLikeInCard: (idkyeOfCard: TypeMyContext["likedCards"][number]) => void;
}
