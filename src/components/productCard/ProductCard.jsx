import './productCard.scss'

const ProductCard = () => {
	return (
		<div className="product">
			<img className="product__img" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Lemon-layer-cake-d2a2df0.jpg" alt=""/>
			<div className="product__text">
				<h2 className="product__text-name">Name</h2>
				<p className="product__text-description">Descr</p>
				<p className="product__text-rate">Bad</p>
			</div>
			<div className="product__buttons">
				<button className="product__buttons-edit">Edit</button>
				<button className="product__buttons-delete">Delete</button>
			</div>
		</div>
	)
}


export default ProductCard;