import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Plot from 'react-plotly.js'


export default function HomeStatusBar(props) {
  const [graphValues, setGraphValues] = useState({symbol:'',x:[],y:[]}),
    {stockObj} = props
  const setValue = () =>{
    console.log("hit")
    const xVal =[],yVal=[]
    for(let key in stockObj['Time Series (Daily)']){
      xVal.push(key)
      yVal.push(stockObj['Time Series (Daily)'][key]['1. open'])
    }
    setGraphValues({symbol:stockObj['Meta Data']['2. Symbol'],x:xVal, y:yVal})
  }
  useEffect(()=>{
    if(graphValues.x.length===0 && stockObj['Time Series (Daily)']) setValue()
  },[stockObj])
  return (
    <Row>
      <Col xs={12} style={{textAlign:'center'}}>
        <Plot
        style={{width:'100%', height:'100%'}}
        data={[
            {
              x:graphValues.x,
              y:graphValues.y,
              type:'scatter',
              mode:'lines+markers',
              marker:{color:'teal'},
            }
          ]}
          layout={{autoSize:true, title:graphValues.symbol}}
          useResizeHandler={true}
        />  
      </Col>
    </Row>
  )
}
