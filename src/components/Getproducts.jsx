import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const Getproducts = () => {

  // initialize  hooks to help you manage the state of ur application
  // we use [] so as to fetch all the details
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");

  //// declare the navigate 
  const navigate = useNavigate()

  // below we specify the image base url 
  const img_url = "https://kivuti.alwaysdata.net/static/images/"

  // create a function to help you fetch the products from your api
  const fetchProducts = async() =>{
    try{
      // update the loading hook  to show users that the products are being fetched 
      setLoading(true)
      // interact with endpoint for fetching the products
      const response = await axios.get("https://kivuti.alwaysdata.net/api/get_products")
      // update the products hook with the response given on API
      setProducts(response.data)

      // set the loading hook back to default
      setLoading(false)
    }
    catch(error){
      // update the contents on the catch block
      // if there is an error 
      // 1 set the loading hook back to default
      setLoading(false)


      // 2. update the error hook with amessage
      setError(error.message)

    }
  }

  // we shall use the useeffet hook that automatically enables us to re render new features incase of ant changes 
  useEffect(() => {
    fetchProducts()
  }, []) 

  //console.log("the products fetched are:",product)


  return (
    <div className='row'>
      <h3 className="text-primary">Available Products</h3>
      {loading && <Loader/> }
      <h4 className="text-danger">{error}</h4> 
      
      {/*map the products fetched from the api to the userinterface*/}

      {products.map((product) => (
        <div className="col-md-3 justify-content-center mb-3">
       <div className="caard shadow">
         <img src={img_url + product.product_photo} 
         alt="product name"
         className='product_img mt-3' />

         <div className="card-body">
          <h5 className="text-primary">{product.product_name}</h5>

          <p className="text-dark">{product.product_description.slice(0, 70)}...</p>
          <h4 className="text-warning">Kes {product.product_cost}</h4>

          <button className="btn btn-outline-info" onClick={() => navigate("/makepayment", {state : {product}})}>Purchase Now </button>
         </div>
       </div>
      </div>
      ) )}
    </div>
  )
}

export default Getproducts;