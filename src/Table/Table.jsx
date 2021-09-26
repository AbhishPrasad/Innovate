import React, {useState,useEffect} from 'react'
import MaterialTable from 'material-table';
import {Link} from 'react-router-dom';
import './Table.css'
function Table(props) {
    const [selectedRow, setSelectedRow] = useState(null);
    const [columns, setColumns] = useState();
    
      const [data, setData] = useState();

      useEffect(() => {
        loadDataOnlyOnce();
      }, []);


      const loadDataOnlyOnce=()=>{
        var Column= [{title: 'Stock Name', field: 'StockName', cellStyle: {
          width: "30%",
          maxWidth: "30%"
          
        }},
                     { title: 'Current Price', field: 'CurrentPrice', type: 'numeric', filtering: false  },
                     { title: 'FundaMental', field: 'FundaMental', filtering: false},
                     { title: 'Technical', field: 'Technical', filtering: false  },
                     { title: 'Sentiment', field: 'Sentiment', filtering: false  }]
        setColumns(Column);

        var sampleData = require('../data.json');
        var datas=[];
        sampleData.quotedata.map((a)=>{
            datas.push({
                StockName:a.longname, CurrentPrice:a.pricedata.last, FundaMental:"Good", Technical:'Bad', Sentiment:'Neutral'  
            })
        })

          setData(datas);
      }
    const showDetaildData=()=>
    {
        
    }

    
    return (
        <div className="tablemain">
            <MaterialTable 
            size='small'
            title="Stock Data"
            data={data}
            columns={columns}
            options={{
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                  },          
                exportButton: true,
                filtering: true,
                actionsColumnIndex: -1,
                
                selection: true
              }}
              onSelectionChange={(eve) => eve.length == 0?setSelectedRow(null): setSelectedRow(eve.map(o=>o.StockName))}
            editable={{
                
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataDelete = [...data];
                      const index = oldData.tableData.id;
                      dataDelete.splice(index, 1);
                      setData([...dataDelete]);
                      
                      resolve()
                    }, 1000)
                  }),
              }}
            />
           {/* <button onClick={()=>props.detailData(selectedRow)} >
        Show
      </button> */}
        {selectedRow ==null ?'' :<Link to={'/details/'+selectedRow}>Show Data</Link>}
        </div>
    )
}

export default Table
