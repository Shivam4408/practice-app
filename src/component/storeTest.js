import '../componentCss/storeTest.css';
import { useSelector, useDispatch } from 'react-redux';

const StoreTest = () => {
    const value = useSelector(state => state.value);
    const dispatch = useDispatch();
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">Redux example</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    {/* <li className="nav-item"><a className="nav-link">Cypto content</a></li>
                    <li className="nav-item"><a className="nav-link">About us</a></li> */}
                </ul>
            </nav>
            <h1>click here to update count</h1>
            <button className="button"
                onClick={() => dispatch({ type: "increament", payload: 5 })}
            >ADD</button>
            <div>{value}</div>
            <button className="button"
                onClick={() => dispatch({ type: "decrement", payload: 2 })}
            >Minus</button>
        </div>
    );
}
export default StoreTest;