export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-white">SystemDesignAI</h1>

      <div className="space-x-6 text-white">
        <button>Problems</button>
        <button>Learn</button>
        <button>About</button>
      </div>
    </nav>
  );
}
