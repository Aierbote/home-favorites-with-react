import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FC, memo, useState } from "react";

const Input = styled.input``;

export const Form: FC = memo((): JSX.Element => {
	const [summary, setSummary] = useState("");
	const [url, setUrl] = useState("");

	return (
		<form action="#">
			<Input value="input di testo" />
			<Input value="url immagine" />
			<Input type="button" value="Add Card" disabled={!summary || !url} />
		</form>
	);
});
