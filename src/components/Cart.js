import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe'
import '../styles/Home.scss';
import {arrowUp} from '../images/arrowUp.png';
// import {arrowDown} from '../images/arrowDown.png';
import {cart} from '../images/iconcart.png';
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <div className="card" key={item.id}>
                                    <div className="card-image"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="card-content">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Preço: R${item.price},00</b></p> 
                                        <p>
                                            <b>Quantidade: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><div className="arrowup-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>
                                                <img src={arrowUp} alt="arrowUp"/></div>
                                            </Link>
                                            <Link to="/cart"><div className="arrowdown-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>
                                                </div>
                                            </Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remover item</button>
                                            <img src={cart} alt="arrowDown"/>
                                    </div>
                                    
                                </div>
                         
                    )
                })
            ):

             (
                <p className="no-item">Nenhum item.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Você pediu:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)