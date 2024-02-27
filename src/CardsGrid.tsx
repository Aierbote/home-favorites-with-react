import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FC, memo, useEffect, useState } from "react";
import { CardProps, GridProps, TypeMyContext } from "./declaration";
import { useAppContext } from "./MyContext";
import { utilitySaveLikedCardsToStorage } from "./utility";

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
	gap: 2.125rem;
`;

const StyledCard = styled.div`
	border: #0000001a 0.125rem solid;
	width: 22.5rem;
	padding: 1rem;
	border-radius: 1rem;
	max-height: 30.1525rem;
	min-height: min-content;
`;

const imgWidth = {
	maxWidth: "22.5rem",
	width: "22.5rem",
	maxHeight: "15rem",
	minHeight: "10rem",
};

Wrapper.propTypes = {};

// const Card = styled.div``;
// Card.propTypes = {};

const styleHearButton = {
	width: "2.125rem",
	height: "2.125rem",
};

const Card = memo(
	({
		id,
		imgUrl = "https://tse2.mm.bing.net/th?id=OIP.Uge8n3cdvDQTUusYkX_BwAHaFl&pid=Api",
		title = "title",
		summary = "summary",
		toggleLikeInCard = () => {},
	}: TypeMyContext["contentCards"][number]): JSX.Element => {
		const iconTrue = "❤️";
		const iconFalse = "♡";
		const [isLiked, setIsLiked] = useState(false);

		const onSaveToFavorites = () => {
			setIsLiked(!isLiked);
		};

		return (
			<StyledCard>
				<img src={imgUrl} alt="" style={imgWidth} />
				<div>
					<h3>{title.toUpperCase()}</h3>
					<p> {summary}</p>
					<button
						onClick={() => {
							onSaveToFavorites();
							toggleLikeInCard(id);
						}}
						style={styleHearButton}
					>
						<span>{isLiked ? iconTrue : iconFalse}</span>
					</button>
				</div>
			</StyledCard>
		);
	}
);

const CardsGrid: FC<GridProps> = memo(({ children }): JSX.Element => {
	const { contentCards, likedCards, setLikedCards } =
		useAppContext() as TypeMyContext;

	const toggleLikeInCard = (
		idkeyOfCard: TypeMyContext["contentCards"][number]["id"]
	) => {
		let newLikedCards: TypeMyContext["likedCards"];
		if (likedCards.includes(idkeyOfCard)) {
			// toggling off, id all likesCard minus the id of card toggled
			const filteredLikedCards = likedCards.filter(
				(liked_) => liked_ !== idkeyOfCard
			);
			newLikedCards = filteredLikedCards;
			setLikedCards(newLikedCards);
		} else {
			newLikedCards = [...likedCards, idkeyOfCard];
			setLikedCards(newLikedCards);
		}
		utilitySaveLikedCardsToStorage(newLikedCards);
	};

	return (
		<>
			<h2>{children}</h2>
			<Wrapper>
				{contentCards?.map(
					({ id, imgUrl, title, summary }: CardProps): JSX.Element => (
						<Card
							id={id}
							key={id}
							imgUrl={imgUrl}
							title={title}
							summary={summary}
							// TODO : FIXME :
							toggleLikeInCard={toggleLikeInCard}
						/>
					)
				)}
			</Wrapper>
		</>
	);
});

export default CardsGrid;
