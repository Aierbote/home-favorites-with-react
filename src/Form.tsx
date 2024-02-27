import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FC, memo, useState, ChangeEvent, FormEventHandler } from "react";
import { utilitySaveCardsToStorage } from "./utility";
import { CardProps, FormProps, TypeMyContext } from "./declaration";
import { useAppContext } from "./MyContext";

const Input = styled.input``;

const Form: FC = memo((): JSX.Element => {
	const [newImgUrl, setNewImgUrl] = useState("");
	const [newSummary, setNewSummary] = useState("");
	const [newTitle, setNewTitle] = useState("");

	const { onCardSubmit } = useAppContext() as TypeMyContext;

	const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
		setNewTitle(event.target.value);
	};

	const onChangeSummary = (event: ChangeEvent<HTMLInputElement>) => {
		setNewSummary(event.target.value);
	};

	const onChangeImgUrl = (event: ChangeEvent<HTMLInputElement>) => {
		setNewImgUrl(event.target.value);
	};

	const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		const newCard = {
			id: new Date().toISOString(),
			imgUrl: newImgUrl,
			title: newTitle,
			summary: newSummary,
			toggleLikeInCard: () => {},
		};

		utilitySaveCardsToStorage(newCard);
		onCardSubmit(newCard);

		// resetting the form in the end
		setNewImgUrl("");
		setNewSummary("");
		setNewTitle("");
	};

	return (
		<form onSubmit={onSubmit}>
			<Input
				type="text"
				placeholder="TITLE"
				value={newTitle}
				onChange={onChangeTitle}
			/>
			<Input
				type="text"
				placeholder="descriptive text"
				value={newSummary}
				onChange={onChangeSummary}
			/>
			<Input
				type="url"
				placeholder="URL of an image"
				value={newImgUrl}
				onChange={onChangeImgUrl}
			/>
			<Input
				type="submit"
				value="Add Card"
				disabled={!newTitle || !newSummary || !newImgUrl}
			/>
		</form>
	);
});

export default Form;
