// React import not required with automatic JSX runtime

function Header() {
  return (
  <div className="bg-[#fdfdfd] h-auto">
      {/* Fullscreen header image */}
  <div className="w-full h-[60vh] md:h-[42rem] relative flex items-center mb-12">
        <img
          src="https://images.unsplash.com/photo-1755685682321-d4a38aa26214?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          className="w-full h-full object-cover"
        />
        {/* removed overlay - content will be below the image */}
      </div>
      {/* Content below image */}
      <div className="container mx-auto max-w-[1320px] text-center text-neutral-800 pt-10 md:pt-16 p-10">
  <h1 className="text-[#016e41] leading-[1.1] text-4xl md:text-5xl font-bold mb-6">Welcome to Matcha in The World</h1>
        <p className="text-[#555555] m-2 mt-4 text-lg md:text-3xl">content and enjoy your stay!</p>
        <button className="bg-[#016e41] text-white inline-flex justify-center px-4 py-2 rounded-full mt-6">Get Started</button>
    </div>
  </div>
  )
}

export default Header