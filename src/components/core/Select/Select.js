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

	const separatorStyles = {
		control: (styles) => ({
			...styles,
			backgroundColor: 'transparent',
			border: 'none',
			padding: 0,
			fontSize: '12px',
			lineHeight: '12px',
			fontWeight: 700,
			color: '#0275B1',
			cursor: 'pointer',
		}),
		dropdownIndicator: (base) => ({
			...base,
			color: '#0275B1',
		}),
		indicatorSeparator: (base) => ({ ...base, display: 'none' }),
		singleValue: (base) => ({ ...base, color: '#0275B1' }),
		valueContainer: (base) => ({ ...base, padding: 0 }),
	};

	return (
		<ReactSelect
			defaultValue={props.defaultValue}
			options={props.selectOptions}
			styles={props.styles && props.styles === 'separatorStyles' ? separatorStyles : selectStyles}
		/>
	);
}

export default Select;
