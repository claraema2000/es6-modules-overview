// import add from '../../Utils/Calculate';
import { add, multiply, divideTheFirstNumByTheSecondNum as divide } from '../../Utils/Calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css'
const Sunglass = () => {
    const first = 140;
    const second = 160;
    const sum = add(first, second);
    const multi = multiply(first, second);
    const div = divide(first, second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;