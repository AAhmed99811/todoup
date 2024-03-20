import { useRef } from "react";
import Modal from "./Modal";
import { PiArrowRightBold } from "react-icons/pi";

const Input = ({ onAdd, }) => {
    const task = useRef();
    const modal = useRef();
    {/* //! making a fuction to save the value of the user input in an object*/ }
    const handleSave = () => {
        const enteredTask = task.current.value;
        document.getElementById('id').value ='';
        //? Validating the user input Data
        if (enteredTask.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd(
            {
                value: enteredTask,
            }
        )
    }
    const inputFieldClass = "border-y-[0.2rem] border-l-[0.2rem] rounded-l-md border-sky-100 px-2 w-[30rem] bg-stone-200 text-stone-600 focus:outline-none focus:border-yellow-400";
    const classes = "text-stone-600 mb-4";
    return (
        <>
            <Modal ref={modal} btnCaption="Close">
                <h2 className="text-xl font-bold text-red-700 my-4">Invalid Input</h2>
                <p className={classes}>Please enter valid input</p>
            </Modal>
            <p className="flex m-4 justify-center w-2/3">
                {/* //! Taking the user input with input filed and passing it with refrence */}
                <input
                    id="id"
                    ref={task}
                    className={inputFieldClass}
                    type="text"
                    placeholder="Enter the task"/>
                <button className="bg-blue-400 px-6 py-2 rounded-r-md " onClick={handleSave}><PiArrowRightBold /></button>
            </p>
        </>
    );
}

export default Input;