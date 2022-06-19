export const saveCart = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

export const readCart = () => { return  JSON.parse(localStorage.getItem('cart')) || [] }


export const itemAlreadyInCart = (id) => {
    const cart = readCart() || []
    let exist = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id == id) {
        exist = true;
      }
    }
  
    return exist;
  }

  export const deleteItemFromCart = (id) => {
    const items = readCart() || []
  
    const newCart = items.filter(e => e._id != id);
    console.log(newCart)
    saveCart(newCart)
  }
  
  export const countCartItem = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart?.length > 0) {
      return cart?.length
    } else {
      return 0;
    }
  
  }


  export const getTotal = () => {
    const items = readCart() || []

    let temp = 0;
    items.map(item => {
      temp += item.price * item.cant
    })
    return temp;
  }
  