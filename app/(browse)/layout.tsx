import { Sidebar } from "../_components/sidebar/sidebar"

const BrowseLayout = ({
    children,
}:{
    children:React.ReactNode
}) => {
    return(
        <div className="bg-[#020202]">
            <Sidebar />
                {children}
        </div>
    ) 
}

export default BrowseLayout 