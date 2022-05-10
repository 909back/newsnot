import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>
            <Image src={Logo} alt="지브리 로고" layout="responsive" />
          </a>
        </Link>
      </h1>
      <style jsx>{`
         header {
             position: fixed;
             top:0;
             left:0;
             right:0;
             width: 100%;
             height: 200px;
             display: flex;
             flex-flow: column nowrap;
             align-items: center;
             justify-content: center;
             box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
             background: linear-gradient(45deg,#E79796,#f5cec7,#ffc988,#c6c09c,#ffb284));
             background-size: 400% 400%;
             animation-name: ChangeColor;
             animation-duration: 90s;
             animation-iteration-count: infinite;
             animation-direction: alternate;
             animation-timing-function:ease-in-out;
         }

         header > h1 {
             width: 180px;
             height: 100px;
         }  
         @keyframes ChangeColor {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
         }
      `}</style>
    </header>
  );
};

export default Header;
