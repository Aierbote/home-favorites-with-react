import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FC, memo, useState } from "react";
import { utilityGetFromStorage } from "./utility";

interface GridProps {
	children?: any;
}

interface CardProps {
	id?: Date;
	imgUrl: string;
	altText: string;
	summary?: string;
	liked?: boolean;
}

const Wrapper = styled.div``;

Wrapper.propTypes = {};

// const Card = styled.div``;
// Card.propTypes = {};

const styleHearButton = {
	width: "2.125rem",
	height: "2.125rem",
};

const Card: FC<CardProps> = memo(
	({ imgUrl, altText }: CardProps): JSX.Element => {
		const iconTrue = "❤️";
		const iconFalse = "♡";
		const [isLiked, setIsLiked] = useState(false);

		const onSaveToFavorites = () => {
			setIsLiked(!isLiked);
		};

		return (
			<div>
				<img src={imgUrl} alt={altText} />
				<div>
					{/* <p> summary={summary}</p> */}
					<button onClick={onSaveToFavorites} style={styleHearButton}>
						<span>{isLiked ? iconTrue : iconFalse}</span>
					</button>
				</div>
			</div>
		);
	}
);

export const CardsGrid: FC<GridProps> = memo(({ children }): JSX.Element => {
	const allCards: Array<CardProps> = utilityGetFromStorage("allCards");

	return (
		<>
			<h2>{children}</h2>
			<Wrapper>
				<Card
					imgUrl="https://emojipedia.org/_next/image?url=https%3A%2F%2Fem-content.zobj.net%2Fcontent%2Fevents%2FSuper_Bowl_PNG.png&w=360&q=75"
					altText="superbowl emojis"
				/>
				<Card
					imgUrl="https://emojipedia.org/_next/image?url=https%3A%2F%2Fem-content.zobj.net%2Fcontent%2Fevents%2FValentines_Day_PNG.png&w=360&q=75"
					altText="Valentine's Day emojis"
				/>
				<Card
					imgUrl="https://emojipedia.org/_next/image?url=https%3A%2F%2Fem-content.zobj.net%2Fcontent%2Fevents%2FMardi_Gras_PNG.png&w=360&q=75"
					altText="Mardì Gras emojis"
				/>
			</Wrapper>
		</>
	);
});
