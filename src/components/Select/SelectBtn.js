import Select from 'react-select';

function SelectBtn({ defaultValue, options, styles }) {
	return (
		<div>
			<Select defaultValue={defaultValue} options={options} styles={styles} />
		</div>
	);
}

export default Select;
