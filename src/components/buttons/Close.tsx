import { FaXmark } from 'react-icons/fa6';

interface Props{
    onClose: () => void;
}
const Close = ({onClose}: Props) => {
    return (
        <div>
            <div className="close-icon">
                <button onClick={onClose}>
                    <FaXmark className="text-2xl"/>
                </button>  
            </div>
            
        </div>
    );
};

export default Close;