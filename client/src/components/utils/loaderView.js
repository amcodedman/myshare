
import { CubeSpinner,WhisperSpinner ,C } from "react-spinners-kit";

const LoaderView=()=>{
    return(<div className="loadingcontainer" style={{height:`${window.innerHeight}px`}}>
    <WhisperSpinner/>

    </div>)
}


export default LoaderView