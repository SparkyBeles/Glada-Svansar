import { useEffect, useState } from "react";
import "../style/hundar.css"

function Hundar(){
    const [img,setImg] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    
    useEffect(() =>{
        async function Fetching() {
            try{
                setLoading(true);
                setError("");

                const BIN_ID = import.meta.env.VITE_JSONBIN_ID;
                const KEY = import.meta.env.VITE_JSONBIN_KEY;

                
                const res = await fetch("https://api.jsonbin.io/v3/b/68d3d471d0ea881f40891217",{
                    headers: {
                        "X-Master-Key": KEY
                    }
                });
              
                const data = await res.json();
                if (data.status !== "success") throw new Error("couldnt load the img.")
                    setImg(data.message);

            }catch (e){
                setError(e.message || "Something went wrong!")
            }finally{
                setLoading(false);
            }
            
        }
        Fetching();
    },[]);
    

    if (loading) return <p className="hund status">Laddar Hundar...</p>;
    if (Error) return <p className="Hund-status Error!">{error}</p>;

    return(
        <div className="hund-wrapper">
            <h1>Hund</h1>
            <div className="Hund-grid"> 
                {img.map((url,i)=>(
                    <figure key={i} className="hund-item">
                        <img src={url} loading="lazy" ></img>
                    </figure>
                ) )}
                 </div>
        </div>
    );
      
}
export default Hundar;