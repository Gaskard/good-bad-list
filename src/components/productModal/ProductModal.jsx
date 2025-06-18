import './productModal.scss'

const ProductModal = ({product, onClose}) => {
	return (
		<div className="modal" onClick={onClose}>
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				<img className="modal__content-img" src={product.image} alt={product.name} />
				<h2 className="modal__content-header">{product.name}</h2>
				<p className="modal__content-description">{product.description}</p>
				<p className="modal__content-quality">Quality: {product.quality}</p>
				<button className="modal__content-close" onClick={onClose}>Close</button>
			</div>
		</div>
	)
}

export default ProductModal