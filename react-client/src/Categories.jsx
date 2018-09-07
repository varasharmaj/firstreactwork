import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
class Categories extends Component {
  render() {
    return (
      <div className="container-fluid">
      	
      	<div className="row">
      		<div className="col-sm ">
      			<h1 className="text-center"> Hacking techniques</h1>
      		</div>
      	</div>

      	<div className="row">
	      	<div className="col-sm">
	      	
	      		 <div className="card" >
					  <img className="card-img-top img-fluid" src={ require('./assets/images/dos.jpg')}  />
					  <div className="card-body">
					    <h5 className="card-title">DOS / DDOS Attack</h5>
					    <p className="card-text">The incoming traffic flooding the victim originates from many different sources – potentially hundreds of thousands or more. This effectively makes it impossible to stop the attack simply by blocking a single IP address.</p>
					    <p>A Denial of Service (DoS) attack is different from a DDoS attack. The DoS attack typically uses one computer and one Internet connection to flood a targeted system or resource.</p>
					    <Link to="" className="btn btn-primary">Go somewhere</Link>
					  </div>
				</div>
	      	</div>

	      	<div className="col-sm">
	      	
	      		 <div className="card" >
					  <img className="card-img-top img-fluid" src={ require('./assets/images/fakewap.jpg')}  />
					  <div className="card-body">
					    <h5 className="card-title">Fake WAP Attacks</h5>
					    <p className="card-text">Watering hole attacks are a relatively new phenomenon that have been successfully employed in a number of recent high profile attacks. What is a watering hole attack? Just as lions lie in wait knowing their prey must come to drink, in the cyber version, rather than going after a target directly, the attacker instead infects a trusted resource that potential victims will eventually come to.</p>
					    <Link to="" className="btn btn-primary">Go somewhere</Link>
					  </div>
				</div>
	      	</div>

	      	<div className="col-sm">
	      	
	      		 <div className="card" >
					  <img className="card-img-top img-fluid" src={ require('./assets/images/eavesdropping.jpg')}  />
					  <div className="card-body">
					    <h5 className="card-title">Eavesdropping (Passive Attacks)</h5>
					    <p className="card-text">Which are also known as a sniffing or snooping attack, is an incursion where someone tries to steal information that computers, smartphones, or other devices transmit over a network. An eavesdropping attack takes advantage of unsecured network communications in order to access the data being sent and received. Eavesdropping attacks are difficult to detect because they do not cause network transmissions to appear to be operating abnormally.</p>
					    <Link to="" className="btn btn-primary">Go somewhere</Link>
					  </div>
				</div>
	      	</div>

	      	<div className="col-sm">
	      	
	      		 <div className="card" >
					  <img className="card-img-top img-fluid" src={ require('./assets/images/clickjack.png')}  />
					  <div className="card-body">
					    <h5 className="card-title">ClickJacking Attacks</h5>
					    <p className="card-text">Clickjacking—the practice of deceptively directing a website visitor’s clicks to an undesired element of another site—is surprisingly effective. It’s been often used to propagate links to malicious websites on Facebook. More recently, similar techniques have been shown effective in de-anonymizing website visitors and even tricking them into granting attackers access to OAuth-secured data. </p>
					    <Link to="" className="btn btn-primary">Go somewhere</Link>
					  </div>
				</div>
	      	</div>

      	</div>      

      </div>
   
    )
  }
}
export default Categories;