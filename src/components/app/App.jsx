import Menu from '../menu/Menu.jsx'
import AddButton from '../addButton/AddButton.jsx'
import ProductForm from '../productForm/ProductForm.jsx'
import ProductModal from '../productModal/ProductModal.jsx'

import './app.scss'

import {useEffect, useState} from 'react'
import {addProduct} from '../../api/addProduct'
import {getProducts} from '../../api/getProduct'
import ProductList from '../productList/ProductList.jsx'

function App() {
  
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [showProductList, setShowProductList] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  
  useEffect(() => {
    getProducts().then((fetchesProducts) => {
      setProducts(fetchesProducts)
    })
  }, [])
  
  const handleToggleForm = () => {
    setShowForm((prev) => !prev)
  }
  
  const handleAddProduct = async (product) => {
    setProducts((prev) => [...prev, product])
    await addProduct(product)
  }
  
  const handleRemoveProduct = (id) => {
    setProducts((prev) => prev.filter((_, index) => index !== id))
  }

  return (
    <div className="app">
      <Menu />
      <AddButton handleToggleForm={handleToggleForm}/>
      {showProductList && <ProductList
        products={products}
        handleRemoveProduct={handleRemoveProduct}
        onSelectProduct={setSelectedProduct}/>}
      {showForm && <ProductForm
        handleToggleForm={handleToggleForm}
        handleAddProduct={handleAddProduct}
        setShowProductList={setShowProductList}
        setShowForm={setShowForm}/>}
      {selectedProduct && <ProductModal
       product={selectedProduct}
       onClose={() => setSelectedProduct(null)}/>}
    </div>
  )
}

export default App
