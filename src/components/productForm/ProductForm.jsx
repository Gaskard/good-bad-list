import './productForm.scss'
import {useState} from 'react'

const ProductForm = ({handleToggleForm, handleAddProduct, setShowProductList, setShowForm}) => {
	
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		image: null,
		quality: '',
	})
	
	const {name, description, quality} = formData
	
	const handleChange = ({target : {name, value, files, type}}) => {
		setFormData((prev) => ({ ...prev,
				[name]: type === 'file' ? files[0] : value
			}))
		console.log(formData)
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		if (formData.image) {
			const reader = new FileReader();
			reader.onload = () => {
				handleAddProduct({
					...formData,
					image: reader.result,
				})
				setFormData({name: '', description: '', image: null, quality: ''})
			}
			reader.readAsDataURL(formData.image);
		} else {
			handleAddProduct(formData)
			setFormData({name: '', description: '', image: null, quality: ''})
		}
		setShowProductList(true);
		setShowForm(false);
	}
	
	return (
		<div className="product__form">
			<form onSubmit={handleSubmit} className="product__form-wrapper">
				<h2 className="product__form-title">Add product</h2>
				<div className="product__form-field">
					<label className="product__form-label" htmlFor="">Name</label>
					<input value={name} name="name" onChange={handleChange} className="product__form-input" type="text"/>
				</div>
				<div className="product__form-field">
					<label className="product__form-label" htmlFor="">Description</label>
					<input value={description} name="description" onChange={handleChange} className="product__form-input" type="text"/>
				</div>
				<div className="product__form-field">
					<label className="product__form-label" id="photo" htmlFor="photo">Photo</label>
					<input name="image" onChange={handleChange} className="product__form-input" type="file" />
				</div>
				<div  className="product__form-field">
					<label className="product__form-label" htmlFor="">Good or bad</label>
					<select value={quality} name="quality" onChange={handleChange} id="type" className="product__form-input">
						<option value="">Choose...</option>
						<option value="good">Good</option>
						<option value="bad">Bad</option>
					</select>
				</div>
				<button type="submit" className="product__form-submit">Submit</button>
				<button onClick={handleToggleForm} className="product__form-cancel">Cancel</button>
			</form>
		</div>
	)
}

export default ProductForm;