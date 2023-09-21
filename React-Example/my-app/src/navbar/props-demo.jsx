import  { NavBar } from '../navbar/navbar';

export function PropsDemo(){
    return (
      <div className="container-fluid">
        <h3>Properties Demo</h3>
        <NavBar
          brandname="Shopper"
          theme="bg-dark"
          menuitems={["Home", "About", "Contact"]}
        />
        <NavBar
          brandname="Super Market"
          theme="bg-primary"
          menuitems={["Home", "Shop", "Accessories", "Help"]}
        />
        <NavBar
          brandname="React.js"
          theme="bg-primary"
          menuitems={["Sourav", "Milan", "Himanshu", "Kanha"]}
        />
      </div>
    );}