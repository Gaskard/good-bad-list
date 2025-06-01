import './menu.scss'
import goodIcon from './icons/good.svg'

const Menu = () => {
	return (
		<div className="container">
			<div className="logo">
				<img className='logo__img' src={goodIcon} alt=""/>
				<h1 className='logo__header'>Good bad list</h1>
			</div>
		</div>
	)
}

export default Menu