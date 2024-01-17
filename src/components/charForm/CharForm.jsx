import { useForm } from 'react-hook-form';
import './charform.scss';

function CharForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = data => console.log(data);

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
					{...register('name', { required: true })}
					aria-invalid={name ? 'true' : 'false'}
				/>

				<button
					type='submit'
					className='button button__main'
				>
					<div className='inner'>FIND</div>
				</button>
			</div>
			{errors.name?.type === 'required' && <p className='char__form-error'>This field is required</p>}
		</form>
	);
}

export default CharForm;
