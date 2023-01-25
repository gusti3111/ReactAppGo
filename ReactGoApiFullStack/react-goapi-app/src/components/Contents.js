import React from "react";
import Axios from "axios";
import {useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row'
import './content.css'
import guitar from '../img/guitar.jpg'
import rakbuku from '../img/rakbuku.jpeg'
import mug from '../img/mug.jpg'
import susucapnona from '../img/susukentalmanis.jpeg'

function Contents() {
  const [image, setImage] = useState([
    {image:guitar},
    {image:rakbuku},
    {image:mug},
    {image:susucapnona}
  ])
    // usestate adalah penampungan temporary data
  // const [nama,setNama] = useState(userData.name)
  // const [Age,setAge] = useState(userData.Age)
  const [Prods, setProds] = useState([])
  // useEffect(()=>{
  //   // if(Age > 23){
  //   //   setNama("Toni")
  //   // }
  //   // if (Age < 0) {
  //   //   setAge(userData.Age)
      
  //   // }
  //   fetch('http://localhost:9000/product/')
  //     .then((response)=> response.json())
  //     .then(data => setProduct(data))
  //   }

  
  // }, []);
  useEffect(() => {
   Axios.get("http://localhost:9000/product/").then((response)=>{
    const responseAPI = response.data.product
    console.log(responseAPI)
    setProds(responseAPI)
   })
  }, []);



return(
  
   <div>
    <Row>
      <Card.Img className="cardimg" src={image.image} />

    {Prods.map((result,index)=>{
      return(
        <Card style={{ width: '18rem' }} key={index} className="card">
        
         
          
          
          <Card.Body className="card-body">
            <Card.Title className="card-title">{result.name}</Card.Title>
            <Card.Text className="card-text" >
              {result.price}
            </Card.Text>
            <Card.Title className="card-text">{result.stock}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      //   <div key={index}>
      //     <h1>{result.name}</h1>
      //     <h2>{result.price}</h2>
      //  </div>

      )
    })}

    </Row>
    
   </div>
     



) 
 
    
       

 
 
}
//  export const userData = {
//   name: "Andy Warhole",
//   Date: new Date(),
//   Time: new Date(),

//   Age : 23,
// }

export default Contents;
