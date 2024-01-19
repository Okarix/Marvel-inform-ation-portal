import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './charform.scss';

const schema = yup
	.object({
		charName: yup.string().required('This field is required'),
	})
	.required();

function CharForm() {
	const [char, setChar] = useState(null);
	const { loading, error, getCharacterByName, clearError } = useMarvelService();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onCharLoaded = char => {
		setChar(char);
		console.log(char);
	};

	const updateChar = charName => {
		clearError();
		getCharacterByName(charName).then(onCharLoaded);
	};

	const onSubmit = ({ charName }) => updateChar(charName);

	const errorMessage = error ? (
		<div className='char__form-error'>
			<ErrorMessage />
		</div>
	) : null;

	const results = !char ? null : char.length > 0 ? (
		<div className='char__form-wrapper'>
			<div className='char__form-success'>{`There is! Visit ${char[0].name} page?`}</div>
			<NavLink to={`/characters/${char[0].id}`}>
				<div className='button button__secondary'>
					<div className='inner'>TO PAGE</div>
				</div>
			</NavLink>
		</div>
	) : (
		<div className='char__form-error'> The character was not found. Check the name and try again</div>
	);

	return (
		<form
			className='char__form'
			onSubmit={handleSubmit(onSubmit)}
		>
			<label
				htmlFor='name'
				className='char__form-label'
			>
				Or find a character by name:
			</label>
			<div className='char__form-wrapper'>
				<input
					className='char__form-input'
					type='text'
					id='name'
					name='name'
					placeholder='Enter name'
					{...register('charName')}
				/>

				<button
					type='submit'
					className='button button__main'
				>
					<div className='inner'>FIND</div>
				</button>
			</div>
			{errors.charName?.message && <p className='char__form-error'>{errors.charName?.message}</p>}
			{errorMessage}
			{results}
		</form>
	);
}

export default CharForm;
