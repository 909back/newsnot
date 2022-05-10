import bg from '../assets/img/bg_haul.jpg';
import Image from 'next/image';
import { useEffect } from 'react'
const Films = ({results}) => {

    // useEffect(()=>{
    //     (async()=>{
    //         const response = await fetch('/api/films');
            
    //     })()

    // },[]);



    return (
        <ul>
           <li>
               <div className='.film_img'>
               <Image src={bg} alt="" layout='responsive' />
               <h1>file1</h1>
               </div>
           </li>
           <li>
               <div className='.film_img'>
               <Image src={bg} alt="" layout='responsive' />
               <h1>file1</h1>
               </div>
           </li>
           <li>
               <div className='.film_img'>
               <Image src={bg} alt="" layout='responsive' />
               <h1>file1</h1>
               </div>
           </li>

           <style jsx>{`
           ul {
               width: 60vw;
               height:auto;
               margin: 20px auto;
               background-color:#fff;
               display: flex;
               flex-flow: row wrap;
               gap: 5px;
               jusitify-content: space-between;
               align-items: center;
           }

           li {
               width:20vw;
               height: 60vh;
               flex: calc(20vw - 5px);
               text-align: center;
           }

           .film_img {
               width: 100%;
               overflow: hidden;  
           }


           
           `}</style>
        </ul>
    );
};

export async function getServerSideProps(){
    const results = await fetch('http://localhost:3000/api/films')
    console.log(results);
    console.log(results);
    return {
        props:{
            results,
        },
    };
}

export default Films;
