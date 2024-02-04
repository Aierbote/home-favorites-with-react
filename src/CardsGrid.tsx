import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FC, memo } from "react";

interface Props {
	children?: any;
}

const Wrapper = styled.div``;

Wrapper.propTypes = {};

const Card = styled.div``;

Card.propTypes = {};

export const CardsGrid: FC<Props> = memo(({ children }): JSX.Element => {
	return (
		<>
			<h2>{children}</h2>
			<Wrapper>
				<Card />
				<Card />
				<Card />
			</Wrapper>
		</>
	);
});
