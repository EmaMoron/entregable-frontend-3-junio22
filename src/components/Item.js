
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item(props) {
  function sortByID(x, y){
    if (x.id < y.id) {return -1;}
    if (x.id > y.id) {return 1;}
    return 0;
}

  function buy (id){
    let item = props.items.filter(item=> item.id === id)[0]
    if(item.stock>0){
      props.setCompra(props.compra+1);
      let newArray = [];
      newArray = props.items.filter(item=> item.id!== id)
      item.stock--;
      newArray.push(item)
      props.setItems(newArray.sort(sortByID)) 
    }
    else{
      alert("Ese producto no tiene Stock disponible.")
    }
  }
  return (
    <div className='producto'>
      <h3>{props.item.producto.nombre}</h3>
      <p>{props.item.producto.descripcion}</p>
      <h5>En stock <span> {props.item.stock===0?"Agotado": props.item.stock}</span></h5>
      <button disabled={props.item.stock=== 0} onClick={()=>buy(props.item.id)}>{props.item.stock===0?"Sin stock":"Comprar"}</button>
    </div>
  )
}
