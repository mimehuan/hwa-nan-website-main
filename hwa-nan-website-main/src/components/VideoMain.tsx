import home_vid from '../assets/home_vid.mp4'
import'./VideoStyle.css'


const VideoMain = () => {
    return (
        <div className = 'VideoMain'>
            <video src = {home_vid} autoPlay loop muted/>
        </div>
    )
}
export default VideoMain