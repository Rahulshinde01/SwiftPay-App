import { Link } from "react-router-dom"

export const BottomWarning= ({label, next, to})=>{
    return <div>
        <div className="flex pl-6">
            <div>
                {label}
            </div>
            <Link className="underline pl-2 cursor-pointer" to={to}>
                {next}
            </Link>
        </div>

    </div>

}