import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FC, memo, useState, ChangeEvent, FormEventHandler } from "react";

const Input = styled.input``;

export const Form: FC = memo((): JSX.Element => {
	const [summary, setSummary] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	const onChangeSummary = (event: ChangeEvent<HTMLInputElement>) => {
		setSummary(event.target.value);
	};

	const onChangeImgUrl = (event: ChangeEvent<HTMLInputElement>) => {
		setImgUrl(event.target.value);
	};

	const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		console.log("summary", summary);
		console.log("imgUrl", imgUrl);
	};

	return (
		<form onSubmit={onSubmit}>
			<Input
				placeholder="descriptive text"
				value={summary}
				onChange={onChangeSummary}
			/>
			<Input
				placeholder="URL of an image"
				value={imgUrl}
				onChange={onChangeImgUrl}
			/>
			<Input type="submit" value="Add Card" disabled={!summary || !imgUrl} />
		</form>
	);
});
