export default function Table(props) {
  let className ="table";
  if(props.striped){
    className +=" table-striped"
  }
  if(props.hover){
    className +=" table-hover"
  }
  if(props.dark){
    className +=" table-dark"
  }



  

    return (
    <table className={className}>
      <thead>
          <tr>
            {
              props.columns ? props.columns.map(column => {
                return <th key={column.key} scope="col">{column.label}</th>
              }) : null
            }
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          {
            props.rows.map(row=>{
              return(
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.userName}</td>
               </tr>  
              )
            })
          }
        </tbody>
      </table>
    )
    
}

