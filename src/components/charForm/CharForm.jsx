import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useMarvelService from '../../services/MarvelService';
import './charform.scss';

const schema = yup
	.object({
		name: yup.string().required('This field is required'),
	})
	.required();

function CharForm() {
	const { loading, error, getCharacterByName, clearError } = useMarvelService();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = ({ name }) => getCharacterByName(name);

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
					{...register('name')}
				/>

				<button
					type='submit'
					className='button button__main'
				>
					<div className='inner'>FIND</div>
				</button>
			</div>
			{errors.name?.message && <p className='char__form-error'>{errors.name?.message}</p>}
		</form>
	);
}

export default CharForm;
