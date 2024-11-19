export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-end text-center" >
            <h1 className="text-lg font-semibold text-center sm:text-left" > LaunchCtl </h1>
            < div className="flex gap-2" >
                <button className="bg-black/[.05] hover:bg-black/[.08] dark:bg-white/[.2] hover:dark:bg-white/[.3] px-3 py-1 rounded-lg font-semibold text-sm" > Sign in </button>
                < button className="text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 hover:dark:bg-blue-500 px-3 py-1 rounded-lg font-semibold text-sm" > Sign up </button>
            </div>
        </div>
    );
};