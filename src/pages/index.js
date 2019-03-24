import React from "react"
import logo from "../images/phoenix.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <div style={{
      height: '100vh',
      display: 'flex',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'

  }} >
    <SEO title="Home" keywords={[
        `phoenix`,
        `event`,
        `foot`,
        'fetish',
        'party'
    ]} />
    <div   style={{marginTop:-20, display:'flex', alignItems:'center',  fontFamily:'Atomic Age', fontSize:40,  color:'white'}}>
        <img alt='logo' src={logo} />
        <div style={{textAlign:'right', marginLeft:20}}>
            Phoenix
            <br/>
            Events
        </div>
    </div>
    <br/>
    <p style={{color:'white', fontFamily: 'Atomic Age'}}>
      Coming Soon...
    </p>
  </div>
)

export default IndexPage
