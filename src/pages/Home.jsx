import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const problems = [
    {
      title: "Design WhatsApp",
      difficulty: "Easy",
      description: "Messaging system for billions of users",
    },
    {
      title: "Design YouTube",
      difficulty: "Medium",
      description: "Video upload and streaming platform",
    },
    {
      title: "Design Uber",
      difficulty: "Hard",
      description: "Ride matching and realtime tracking",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold">SystemDesignAI</h1>

        <div className="flex gap-6 text-gray-400">
          <button>Problems</button>
          <button>Learn</button>
          <button>About</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Master System Design</h1>

        <p className="mt-4 text-gray-400">
          Learn by solving real interview problems with AI guidance.
        </p>

        <input
          placeholder="Search Problems..."
          className="mt-8 w-[500px] bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg"
        />
      </section>

      {/* Problems */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {problems.map((problem) => (
          <div
            key={problem.title}
            onClick={() => navigate("/problem")}
            className="cursor-pointer bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
          >
            <h2 className="text-xl font-bold">{problem.title}</h2>

            <p className="text-gray-400 mt-3">{problem.description}</p>

            <span className="inline-block mt-4 px-3 py-1 bg-purple-700 rounded-full text-sm">
              {problem.difficulty}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
