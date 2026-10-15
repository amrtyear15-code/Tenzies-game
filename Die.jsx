export default function Die(props){
const styles ={ backgroundColor:props.isHeld===true?"#59E391":"white"}


    return<button 
    key={props.key} 
    className="buttons" 
    style={styles} 
    onClick={props.hold}
    >{props.value}  </button>
}