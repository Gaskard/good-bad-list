import './productCard.scss'

const ProductCard = ({product, onDelete}) => {
	return (
		<div className="product">
			<img className="product__img" src={product.image} alt=""/>
			<div className="product__text">
				<h2 className="product__text-name">{product.name}</h2>
				<p className="product__text-description">{product.description}</p>
				<p className="product__text-rate">{product.quality}</p>
			</div>
			<div className="product__buttons">
				<button className="product__buttons-edit">Edit</button>
				<button onClick={onDelete} className="product__buttons-delete">Delete</button>
			</div>
		</div>
	)
}


export default ProductCard;