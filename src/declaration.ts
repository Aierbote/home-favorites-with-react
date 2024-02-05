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
	liked?: boolean;
}

export interface FormProps {
	onCardSubmit: (newCard: CardProps) => void;
}
