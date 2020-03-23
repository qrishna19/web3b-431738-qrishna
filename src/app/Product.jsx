import React, {Component, Fragment} from 'react';
import { Carousel, Col, Row, Badge } from 'antd';
import '../assets/css/Product.css';
import CardProduct from '../common/component/CardProduct';
import TextAnim from '../common/component/TextAnim/TextAnim';

const clothData = [
    {
        name:"Baju Putih Polos",
        price: "Rp. 110,000",
        image: "https://www.cleanipedia.com/images/v2/1df3aaccec8edd217d52268294b0a680-1800w-1200h.webp"
    },
    {
      name:"Baju Putih Polos",
      price: "Rp. 110,000",
      image: "https://www.cleanipedia.com/images/v2/1df3aaccec8edd217d52268294b0a680-1800w-1200h.webp"
  },
  {
    name:"Baju Putih Polos",
    price: "Rp. 110,000",
    image: "https://www.cleanipedia.com/images/v2/1df3aaccec8edd217d52268294b0a680-1800w-1200h.webp"
},
{
  name:"Baju Putih Polos",
  price: "Rp. 110,000",
  image: "https://www.cleanipedia.com/images/v2/1df3aaccec8edd217d52268294b0a680-1800w-1200h.webp"
},
{
  name:"Baju Putih Polos",
  price: "Rp. 110,000",
  image: "https://www.cleanipedia.com/images/v2/1df3aaccec8edd217d52268294b0a680-1800w-1200h.webp"
},
{
  name:"Baju Putih Polos",
  price: "Rp. 110,000",
  image: "https://www.cleanipedia.com/images/v2/1df3aaccec8edd217d52268294b0a680-1800w-1200h.webp"
},
{
  name:"Baju Putih Polos",
  price: "Rp. 110,000",
  image: "https://www.cleanipedia.com/images/v2/1df3aaccec8edd217d52268294b0a680-1800w-1200h.webp"
},

]

class Product extends Component {

    state = {
        order: 0
    }

    handleCounterChange = (value) => {
        this.setState({
            order: value
        })
    }

    render(){
        return (
          <Fragment>
            <div className="header">
              <div className="logo">
                <img
                  src="https://etanee.id/img/content/img_logo_etanee_white.svg"
                  alt=""
                />
              </div>
              <div className="troley">
                <Badge count={this.state.order}>
                <img
                  src="https://etanee.id/img/icon/ic_cart_white.svg"
                  alt=""
                />
                </Badge>
              </div>
            </div>
            <Carousel autoplay>
              <div>
                <TextAnim />
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
              <Row style={{justifyContent:'center'}}>
                {clothData.map(data => (
                  <Col span={5}>
                    <CardProduct
                      onCounterChange={value => this.handleCounterChange(value)}
                      name={data.name}
                      price={data.price}
                      image={data.image}
                    />
                  </Col>
                ))}
              </Row>
          </Fragment>
        );
    }
}

export default Product;