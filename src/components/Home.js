import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import '../styles/Home.scss';
import add from '../images/add.png';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                        </div>

                        <div className="card-content">
                            <span className="card-title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Preço: R${item.price}</b></p>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}>
                                <img src={add} className="add-icon" title="Adicionar ao carrinho"/>
                            </span>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="centered">Nossos Livros</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)