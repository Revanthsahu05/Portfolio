export default function ProjectsSection() {
  const projects = [
    {
      title: "TAXIRIDE",
      desc: "Real-time ride sharing web app with maps & sockets.",
      link: "https://github.com/Revanthsahu05/TAXIRIDE",
    },
    {
      title: "E-SHOP",
      desc: "Full-stack ecommerce platform with auth & payments.",
      link: "https://github.com/Revanthsahu05/E-SHOP",
    },
    {
      title: "CHESS-WEB-APPLICATION",
      desc: "Play chess online with real-time multiplayer using websockets.",
      link: "https://github.com/Revanthsahu05/CHESS-WEB-APPLICATION",
    },
    {
      title: "BUBBLE-HIT-GAME",
      desc: "Simple and fun bubble hit game built with vanilla JavaScript.",
      link: "https://github.com/Revanthsahu05/BUBBLE-HIT-GAME",
    },
    {
      title: "AUDIO-PLAYER",
      desc: "Custom audio player UI built with HTML, CSS & JS.",
      link: "https://github.com/Revanthsahu05/AUDIO-PLAYER",
    },
    {
      title: "COLLEGE-PREDICTOR",
      desc: "Tool to predict engineering colleges based on entrance ranks.",
      link: "https://github.com/Revanthsahu05/COLLEGE-PREDICTOR",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-white p-8 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">
              {proj.title}
            </h3>
            <p className="text-gray-600 mb-4">{proj.desc}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              View →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
