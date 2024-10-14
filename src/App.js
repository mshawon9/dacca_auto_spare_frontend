import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './screens/_Dashboard'
import HeaderNav from './inc/_HeaderNav'
import Purchase from './screens/_Purchase'


export default class App extends React.Component{


  render(){
    return (

      <div>
          <Router>

                    <Routes>
                      

                    <Route element={<HeaderNav/>} >                    

                      
                      <Route exact path="/" element={<Dashboard />} />        
                      <Route exact path="/purchase" element={<Purchase />}/>        


                    </Route>
                    
                    

                    </Routes>

            </Router>
        
      </div>

    )


  }


}