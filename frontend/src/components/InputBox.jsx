export const InputBox = ({label, placeholder , onChange}) =>{
    return <div className="pt-4">
        <div className="flex font-medium pl-1.5">
        {label}
        </div>
        <div className="flex pl-1">
        <input onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200" placeholder={placeholder} />

        </div>
    </div>
}