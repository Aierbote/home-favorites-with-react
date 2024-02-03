import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FC } from "react";

const NavBar = styled.nav({
	padding: "0 2rem",
	display: "flex",
	flexDirection: "row",
	justifyContent: "end",
	background: "#8100002b",
	fontSize: "xx-large",
	gap: "1rem",
});

const hover = css`
	&:hover {
		background-color: #81000069;
		cursor: pointer;
		color: white;
	}
`;

const Link = styled.a(
	{
		padding: "0.625rem",
	},
	hover
);

export const Header: FC = (): JSX.Element => {
	return (
		<NavBar>
			<Link>Home</Link>
			<Link>Favorites</Link>
		</NavBar>
	);
};
