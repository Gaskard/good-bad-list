import './productForm.scss'

const ProductForm = () => {
	return (
		<div className="product__form">
			<form action="" className="product__form-wrapper">
				<h2 className="product__form-title">Add product</h2>
				<div className="product__form-field">
					<label className="product__form-label" htmlFor="">Name</label>
					<input className="product__form-input" type="text"/>
				</div>
				<div className="product__form-field">
					<label className="product__form-label" htmlFor="">Description</label>
					<input className="product__form-input" type="text"/>
				</div>
				<div className="product__form-field">
					<label className="product__form-label" id="photo" htmlFor="photo">Photo</label>
					<input className="product__form-input" type="file" name="photo" />
				</div>
				<div className="product__form-field">
					<label className="product__form-label" htmlFor="">Good or bad</label>
					<select name="" id="type" className="product__form-input">
						<option value="">Choose...</option>
						<option value="good">Good</option>
						<option value="bad">Bad</option>
					</select>
				</div>
			</form>
		</div>
	)
}

export default ProductForm;