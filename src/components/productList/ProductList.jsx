import './productList.scss'
import ProductCard from '../productCard/ProductCard.jsx'

const ProductList = ({products, handleRemoveProduct, onSelectProduct}) => {
	console.log(products.map(p => p.id));
	return (
		<div className="product__list">
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					onDelete={() => handleRemoveProduct(product.id)}
					onClick={() => onSelectProduct(product)}/>
			))}
		</div>
	)
}

export default ProductList