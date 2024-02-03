import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FC, memo } from "react";

const Wrapper = styled.div``;

Wrapper.propTypes = {};

const Card = styled.div``;

Card.propTypes = {};

export const CardsGrid: FC = memo((): JSX.Element => {
	return (
		<>
			<h2>list of all cards</h2>
			<Wrapper>
				<Card />
				<Card />
				<Card />
			</Wrapper>
		</>
	);
});
