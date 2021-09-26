import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Graph from './Components/Graph'
import './Main.css';
import CloseIcon from '@mui/icons-material/Close';
function Main() {
    
    const {stocks} = useParams();
    const [parameter,setParameter]=useState();
    const [paramUpdate, setParamUpdate] = useState(false);
    
    let parama='';
    useEffect(() => {
    storeParam();

    }, [paramUpdate]);
    const storeParam=()=>{
        var d=[]
        JSON.stringify(stocks).split(',').map((o)=>{
            d.push(o)
        });
        setParameter(d)
        setParamUpdate(true)
    }

    return (
        <div className="detailsMain">
            <div className="closeItem">
           
                <Link className="navBack" to="/"><CloseIcon className="closeGraph" /></Link> 
    
                </div>
            <div className="one">
            
                <div className="graph"><Graph url="https://canvasjs.com/data/docs/ltcusd2018.json"/></div>
                { paramUpdate == true && parameter.length > 1 && <div className="graph"><Graph url="https://canvasjs.com/data/docs/ltcusd2018.json"/></div>}
                
                
            </div>
            <div className="two">
            <div className="graph1">graph Goes here</div>
                <div className="detailnew1">News here</div>
            </div>        
                   
        </div>
    )
}

export default Main
