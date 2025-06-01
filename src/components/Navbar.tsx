const Navbar = () => {
  return (
    <div className='sticky top-0 bg-white z-10'>
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className="text-4xl font-medium">LOGO</h1>
                <div className="relative w-full max-w-[500px]">
                  <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full " 
                  type="text" placeholder="Search Product..." />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar