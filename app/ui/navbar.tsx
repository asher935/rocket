import { BsCodeSlash } from "react-icons/bs";
export default function Navbar({codeShowing, setCodeShowing}: {codeShowing: boolean, setCodeShowing: (codeShowing: boolean) => void}) {
    return (
        <div className="w-full flex justify-between text-lg font-semibold text-center sm:text-left">
            <h1 className="">LaunchCtl</h1>
            <button onClick = {() => setCodeShowing(!codeShowing)} className=""><BsCodeSlash /> </button>
            {/* <div className="flex" >
                <button className=""><BsCodeSlash /> </button>
                <button className="text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 hover:dark:bg-blue-500 px-3 py-1 rounded-lg font-semibold text-sm"> Sign up </button>
            </div> */}
        </div>
    );
};