import React from "react"; 
import Link from "next/link";
import Image from "next/image";
import { useStoreState, useStoreActions } from "easy-peasy";

const Index = () => {
  const counter = useStoreState((state) => state.counter.count);
  const increment = useStoreActions((actions) => actions.counter.increment);
  const decrement = useStoreActions((actions) => actions.counter.decrement);
  const resetCounter = useStoreActions((actions) => actions.counter.reset);

  return (
    <>
      <h1>KMITL Union Shop</h1>
      <hr />
      <div className="text-center">
        <Image
          className="mb-5"
          style={{ width: "100%" }}
          src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/441911013_754349766779521_188713072173256680_n.png?stp=dst-png_tt7&_nc_cat=100&cb=99be929b-defccdb7&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=rv6C1admcw4Q7kNvgETouy5&_nc_ht=scontent.fbkk6-1.fna&_nc_gid=A9TZeKazawzap4UfNS8JXGo&oh=00_AYBJ3JIdRHdjBQRc685oOPFt1DBu7FY50l3QTLU2jj-VBQ&oe=670D230D"
          alt="Ecommerce"
        />
      </div>
      <h1 className="mt-5">Redux Counter</h1>
      <hr />
      <h2>{counter}</h2>
      <button className="btn btn-secondary" type="button" onClick={() => decrement()}>
        -
      </button>
      <button className="btn btn-primary" type="button" onClick={() => increment()}>
        +
      </button>
      <Link href="/about">About</Link>

      {/* Footer Section */}
      <footer className="container-fluid mt-5 p-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="logo-container">
              <Image
                src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/441509428_783494630553400_5215653916334094797_n.jpg?stp=dst-jpg_tt7&_nc_cat=106&cb=99be929b-defccdb7&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=itPAFs3iFikQ7kNvgHlzAbu&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=AmCTROdf1m-hv-yC7XT0E3x&oh=00_AYD4NqVGpycvsn3g_w0rrkiTPS52Bz6wGNls0wGfY5Lu-w&oe=67080481"
                alt="KMITL UNION"
                width={150}
                height={100}
              />
            </div>
          </div>

          <div className="col-md-4">
            <h5>Legals</h5>
            <ul className="list-unstyled">
              <li><Link href="/shipping-policy">Shipping Policy</Link></li>
              <li><Link href="/return-policy">Return Policy</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Socials</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/kmitlunion" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;

