import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";


function Product(){
    return(
        <>
<section className="text-center p-[30px] flex justify-center gap-6">
  <div className="border-2 border-black text-center w-[220px] hover:border-black hover:bg-black hover:text-white p-2 rounded-lg">
        <img src={one} alt="Perfume 1" className="w-full h-auto"/>
        <p>Fogg Wood Extreme, Eau De Parfum, Long Lasting Perfume, 100ml</p>
  </div>

  <div className="border-2 border-black text-center w-[220px] hover:border-black hover:bg-black hover:text-white p-2 rounded-lg">
        <img src={two} alt="Perfume 2" className="w-full h-auto"/>
        <p>Fogg Wood Extreme, Eau De Parfum, Long Lasting Perfume, 100ml</p>
  </div>

  <div className="border-2 border-black text-center w-[220px] hover:border-black hover:bg-black hover:text-white p-2 rounded-lg">
        <img src={three} alt="Perfume 3" className="w-full h-auto"/>
        <p>Fogg Wood Extreme, Eau De Parfum, Long Lasting Perfume, 100ml</p>
  </div>
</section>
        </>
    )
}
export default Product;