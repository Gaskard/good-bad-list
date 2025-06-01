import './menu.scss'
import goodIcon from './icons/good.svg'

const Menu = () => {
	return (
		<div className="container">
			<div className="menu">
				<div className="menu__logo">
					<img className='menu__logo-img' src={goodIcon} alt=""/>
					<h1 className='menu__logo-header'>Good bad list</h1>
				</div>
			</div>
		</div>
	)
}

export default Menu