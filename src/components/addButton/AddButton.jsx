import './addButton.scss';
import plusIcon from './icons/plus.svg'

const addButton = ({handleToggleForm}) => {
	return (
		<button onClick={handleToggleForm} className="button">
			<div className="button__wrapper">
				<p className="button__wrapper-text">add a product</p>
				<img src={plusIcon} alt="" className="button__wrapper-plus"/>
			</div>
		</button>
	)
}

export default addButton