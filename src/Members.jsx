import React from 'react'
import Member from './Member'
// import andrew_img from 'images/Andrew.jpg'
// import jacob_img from './images/Jacob.jpg'
// import bryce_img from './images/Bryce.jpg'
// import greg_img from './images/Greg.jpg'
// import joey_img from './images/Joey.jpg'
// import vince_img from './images/Vince.jpg'
// import blum_img from './images/Dave.jpg'
// import bauer_img from './images/OLAS.jpg'
function Members(){
    const andrew_img = 'images/Andrew.jpg';
    const jacob_img = 'images/Jacob.jpg'
    const bryce_img = 'images/Bryce.jpg'
    const greg_img = 'images/Greg.jpg'
    const joey_img = 'images/Joey.jpg'
    const vince_img = 'images/Vince.jpg'
    const blum_img = 'images/Dave.jpg'
    const bauer_img = 'images/OLAS.jpg'

        return (
            <div>
                <h1>Meet the Band</h1>
                <div className="row">
                    <Member  name="Andrew Alten" instrument="Mandolin" img_url={andrew_img}/>
                    <Member  name="Jacob Alten" instrument="Vocal and Guitar" img_url={jacob_img}/>
                    <Member  name="Bryce Clawson" instrument="Vocals and Harmonica " img_url={bryce_img}/>
                    <Member  name="Greg Stevens" instrument="Banjo and Guitar" img_url={greg_img}/>
                    <Member  name="Joey Oberholzer" instrument="Vocals" img_url={joey_img}/>
                    <Member  name="Vince Stevens" instrument="Dobro" img_url={vince_img}/>
                    <Member  name="Dave Blumberg" instrument="Bass" img_url={blum_img}/>
                    <Member  name="Dave Bauer" instrument="Sound" img_url={bauer_img}/>
                </div>
            </div>
        )
    
}

export default Members;
