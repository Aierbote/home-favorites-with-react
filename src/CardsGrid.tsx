import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FC, memo, useEffect, useState } from "react";
import { utilityGetFromStorage } from "./utility";
import { CardProps, GridProps } from "./declaration";

const Wrapper = styled.div``;

Wrapper.propTypes = {};

// const Card = styled.div``;
// Card.propTypes = {};

const styleHearButton = {
	width: "2.125rem",
	height: "2.125rem",
};

const Card: FC<CardProps> = memo(
	({
		id,
		imgUrl,
		title = "title",
		summary = "summary",
		liked = false,
	}: CardProps): JSX.Element => {
		const iconTrue = "❤️";
		const iconFalse = "♡";
		const [isLiked, setIsLiked] = useState(false);

		const onSaveToFavorites = () => {
			setIsLiked(!isLiked);
		};

		return (
			<div>
				<img src={imgUrl} alt="" />
				<div>
					<h3>{title.toUpperCase()}</h3>
					<p> {summary}</p>
					<button onClick={onSaveToFavorites} style={styleHearButton}>
						<span>{isLiked ? iconTrue : iconFalse}</span>
					</button>
				</div>
			</div>
		);
	}
);

export const CardsGrid: FC<GridProps> = memo(
	({ children, allCards }): JSX.Element => {
		// const allCards: Array<CardProps> = utilityGetFromStorage("allCards");

		return (
			<>
				<h2>{children}</h2>
				<Wrapper>
					{allCards.map(
						({ imgUrl, title, summary }: CardProps): JSX.Element => (
							<Card imgUrl={imgUrl} title={title} summary={summary} />
						)
					)}
				</Wrapper>
			</>
		);
	}
);
