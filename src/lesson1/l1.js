import { useState } from "react";
import DisplyImg from "./l2";
import p1 from ".../lesson1/img/pic1.jpg";
import p2 from ".../lesson1/img/pic2.jpg";
import p3 from ".../lesson1/img/pic3.jpg";
import p4 from ".../lesson1/img/pic4.jpg";
import p5 from ".../lesson1/img/pic5.jpg";
import p6 from ".../lesson1/img/pic6.jpg";

import p1 from ".../lesson1/img/pic1.jpg";
export default function AllImg() {
    const [imges, setimges] = useState = ([p1, p2, p3, p4, p5, p6])
    const [index, setindex] = useState(0)
    const On_Change=(i)=>{

       setindex(i);
    }
      
    return (
        <div>
            <DisplyImg path={index}></DisplyImg>
            <button onClick={On_Change(index-1)}>«</button>
            <button onClick={On_Change(index+1) }>«</button>
        </div>
    )
}



