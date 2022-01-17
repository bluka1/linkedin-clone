import ReactSelect from 'react-select';

function Select() {
	const selectOptions = [
		{ value: 'ENGLISH', label: 'ENGLISH' },
		{ value: 'CROATIAN', label: 'CROATIAN' },
	];

	const selectStyles = {
		control: (styles) => ({
			...styles,
			backgroundColor: 'white',
			border: 0,
			color: 'black',
			cursor: 'pointer',
		}),
		dropdownIndicator: (base) => ({
			...base,
			color: '#0275B1',
		}),
		indicatorSeparator: (base) => ({ ...base, display: 'none' }),
	};

	return <ReactSelect defaultValue={selectOptions[0]} options={selectOptions} styles={selectStyles} />;
}

export default Select;
