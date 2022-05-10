import Image from "next/image";
import Sugar from "../assets/img/sugar.png";
import eyeL from "../assets/img/eyeL.png";
import eyeR from "../assets/img/eyeR.png";
import Films from "../components/Films";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [loc, setLoc] = useState({x:0,y:0});
  const [mLoc, setMloc] = useState({x:0,y:0});
  const [speed, setSpeed ] = useState(0.09)
  const Char = useRef([]);


  const mouseEvent = (event) => {
      setLoc({x:event.clientX - window.innerWidth/2 ,y:event.clientY - window.innerHeight/2})
  }

  const loop = () => {
    setMloc({x:(loc.x - mLoc.x)* speed, y: (loc.y - mLoc.y) * speed});

    Char.current[0].style.transform = `translate(${mLoc.x/3}px,${mLoc.y/3}px)`;
    Char.current[1].style.transform = `translate(${mLoc.x/3}px,${mLoc.y/3}px)`;
    Char.current[2].style.transform = `translate(${mLoc.x/3}px,${mLoc.y/3}px)`;
  }
 
  useEffect(()=>{
    window.addEventListener('mousemove',mouseEvent);
    window.requestAnimationFrame(loop);

  },[loc])


  


  return (
    <section className="main">
        <Films></Films>

      <div className='charchol'>
      <div ref={(element)=>Char.current[0]=element}>
        <Image src={Sugar} alt="설탕 좋아하는 애" layout='responsive' priority/>
      </div>
      <div ref={(element)=>Char.current[1] = element}>
        <Image src={eyeL} alt="설탕 좋아하는 애의 왼쪽 눈" layout='responsive' priority/>
      </div>
      <div ref={(element)=>Char.current[2] = element}>
        <Image src={eyeR} alt="설탕 좋아하는 애의 오른쪽 눈" layout='responsive' priority/>
      </div>
      </div>




      <style jsx>{`
        .main {
          width: 100%;
          height: calc(100% - 100px);
        }

        div {
          position: fixed;
          bottom:20px;
          right:20px;
          width: 50px;
          height: 50px;
        }


      `}</style>
    </section>
  );
}
