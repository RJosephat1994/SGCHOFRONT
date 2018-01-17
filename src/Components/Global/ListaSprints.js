import React, { Component } from 'react';
import PropTypes from'prop-types';
import './css/Form.css';
import './css/tabla.css';




class ListaSprints extends Component {

  constructor(){
  super();

  this.state={
  lista:[]


  }


  }
  static proptypes={
    refresca:PropTypes.array,

  }

componentDidMount(ref) {

  fetch('http://localhost:8080/ApiCheck/Sprints')
       .then((response) => {
         return response.json()
       })
       .then((sprints) => {
         this.setState({ lista: sprints })
       })

ref="no"
}



  render() {
let {refresca}= this.props;
if(refresca=="no"){
this.componentDidMount(refresca);
}


    return (
      <div style={{color:"black"}} className="tabla">
      <h1>Sprints Actuales</h1>

<table>
<tr>
<th>
id Sprint
</th>
<th>
Horas
</th>
<th>
Sprint
</th>
<th>
Fecha Ini.
</th>
<th>
Fecha Fin
</th>
<th>
D. Hábiles
</th>
<th>
F. Entrega
</th>
<th>
F. Revisión
</th>
</tr>


      {this.state.lista.map((item, key)=><tr key={key}>
              <td>
              {item.idSprnt}
              </td>
              <td>
            {item.horas}
              </td>
              <td>
              {item.num}
              </td>
              <td>
            {item.fechaInicio}
              </td>
              <td>
          {item.fechaFin}
              </td>
              <td>
            {item.diasHabiles}
              </td>
              <td>
            {item.fechaEntrega}
              </td>
              <td>
            {item.fechaRevisionYPago}
              </td>
          </tr> )}

</table>
      </div>
    );
  }
}

export default ListaSprints;
