import Table from './components/Table'
import './App.css'


function App() {
  // const table1columnNames = ['#', "First","Last","Mid"]
  // const table2columnNames = ['Id', "Name","Surname","Username"]
  const columnNames = [
    {
      label: "#",
      key : "id"
    },{
      label:"First name",
      key : "firstName"
    },{
      label:"Last name",
      key: "lastName"
    },{
      label:"Username",
      key:"userName"
    }
  ]
 
  const rows = [
    {
      id:1,
      lastName:"Huseynova",
      firstName:"Aytac",
      userName:"@ayka"
    },
    {
      id:2,
      lastName:"Kazimova",
      firstName:"Sara",
      userName:"@Sara.k"
    },
    {
      id:3,
      lastName:"Mansurov",
      firstName:"Fuad",
      userName:"@fm"
    }
  ]

  

  return (
    <>
      <Table
        striped={false}
        hover={true}
        columns={columnNames}
        rows={rows}
      />
     {/* <Table striped={true} hover={false} columns={table2columnNames}/>
     <Table striped={true} hover={false} dark={true}/> */}
    </>
  )
}

export default App
