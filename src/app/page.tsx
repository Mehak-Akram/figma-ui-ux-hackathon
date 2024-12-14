import { Decoration } from "@/components/decoration";
import Furniture from "@/components/furniture";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Product from "@/components/product";



export default function Home() {
  return (
    <div >
      <Hero/>
      <Main/>
      <Product/>
      <Decoration/>
      <Furniture/>
    </div>
  );
}
