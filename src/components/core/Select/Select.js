import ReactSelect from 'react-select';

function Select(props) {
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

	return <ReactSelect defaultValue={props.defaultValue} options={props.selectOptions} styles={selectStyles} />;
}

export default Select;
