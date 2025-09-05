
function Nav(){
    return(
       <>
<nav className="flex justify-between bg-black text-white items-center p-3 ">
<h1 className="text-3xl font-bold">Perfumy</h1>

<ul className="flex space-x-4 mr-8 ">
    <li>
        <a href="#" className="hover:text-blue-400">Home</a>
    </li>
      <li>
        <a href="#" className="hover:text-blue-400">Product</a>
    </li>
      <li>
        <a href="#" className="hover:text-blue-400">About</a>
    </li>
      <li>
        <a href="#" className="hover:text-blue-400">Contact</a>
    </li>
</ul>
</nav>

       </> 
    )
}




export default Nav;
       
