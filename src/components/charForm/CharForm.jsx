import './charform.scss';

function CharForm() {
	return (
		<form className='char__form'>
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
				/>
				<button
					type='submit'
					className='button button__main'
				>
					<div className='inner'>FIND</div>
				</button>
			</div>
		</form>
	);
}

export default CharForm;
