import './MoreStyle.css'

import Campus from '../assets/campus-life.png'
import History from '../assets/history.png'
import School from '../assets/school-pic.png'
import Class from '../assets/class-of.png'
import School2 from '../assets/more-school.png'

function More() {
    return (
        <div className='More'>
            <div className="container">
                <h1>Placeholder</h1>
                <p>Received to Serve</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Campus} alt="/"/>
                    <img src={History} alt="/"/>
                    <img src={School} alt="/"/>
                    <img src={Class} alt="/"/>
                    <img src={School2} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default More