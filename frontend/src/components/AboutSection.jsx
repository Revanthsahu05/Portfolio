import me from "../assets/me.jpg";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 to-white flex flex-col items-center p-8"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>

      <img
        src={me}
        alt="Revanth"
        className="w-40 h-40 rounded-full object-cover object-[center_40%] border-4 border-blue-200 shadow-md mb-6"
      />

      <div className="max-w-3xl bg-white shadow-md rounded-xl p-6 text-center text-lg text-gray-700 space-y-4">
        <p>
          Hello! 👋 I’m{" "}
          <span className="font-semibold text-blue-600">Revanth</span>, a
          passionate full-stack developer experienced in building web apps using
          the MERN stack. I specialize in crafting beautiful user interfaces and
          efficient backend APIs to deliver smooth user experiences.
        </p>
        <p>
          Currently pursuing my B.Tech at IIT Patna, I love solving algorithmic
          challenges, working on real-world projects, and collaborating with
          teammates to build scalable solutions.
        </p>
        <p>
          In my free time, I enjoy competitive programming, learning new
          technologies. Feel free to scroll around my
          portfolio and get in touch — I’d love to collaborate!
        </p>
      </div>
    </section>
  );
}
