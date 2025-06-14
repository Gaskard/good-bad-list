import Menu from '../menu/Menu.jsx'
import AddButton from '../addButton/AddButton.jsx'
import ProductForm from '../productForm/ProductForm.jsx'
import ProductCard from '../productCard/ProductCard.jsx'

import './app.scss'

import {useState} from 'react'

function App() {
  
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)
  
  const handleToggleForm = () => {
    setShowForm((prev) => !prev)
  }
  
  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, product])
  }

  return (
    <div className="app">
      <Menu />
      <AddButton handleToggleForm={handleToggleForm}/>
      <ProductCard />
      {showForm && <ProductForm handleToggleForm={handleToggleForm} handleAddProduct={handleAddProduct}/>}
    </div>
  )
}

export default App
