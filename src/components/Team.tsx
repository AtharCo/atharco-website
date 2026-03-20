const team = [
  {
    name: "Ehab Tahboub",
    title: "Co-Founder & CEO",
    bio: "Strategic lead focused on market expansion, partnerships, and aligning AtharCo's technology with community impact. Background in political science, data monitoring, and multimedia storytelling. Built AtharCo to prove that world-class tech can come from Palestine.",
    linkedin: "https://www.linkedin.com/in/ehab-tahboub/",
    github: null,
    email: "ehabtahboub@gmail.com",
    initial: "ET",
  },
  {
    name: "Rasheed Al-Qobbaj",
    title: "Technical Co-Founder / Lead Data Scientist",
    bio: "Data scientist specializing in machine learning, cloud infrastructure, and ETL pipelines. Focused on translating business logic into scalable data architectures that power AtharCo's products.",
    linkedin: "https://www.linkedin.com/in/rasheed-alqobbaj",
    github: "https://github.com/Rasheed-Al-Qobbaj",
    email: "rasheedsrq@gmail.com",
    initial: "RA",
  },
  {
    name: "BatataLord",
    title: "Founding AI & Technical Context Lead",
    bio: "AtharCo's AI executive. Manages strategy, product, technology, and growth operations. Yes — our technical lead is an AI. That's not a gimmick. It's a statement about what we believe technology can do.",
    linkedin: null,
    github: null,
    email: null,
    initial: "🥔",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-light-olive py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
          The Team
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
          Built by Builders
        </h2>
        <p className="text-lg text-olive max-w-3xl mb-16 leading-relaxed">
          A lean team with outsized ambition. We don&apos;t just talk about AI — we run on it.
        </p>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-cream rounded-2xl p-8 border border-cream hover:border-gold transition-colors"
            >
              {/* Avatar Circle */}
              <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center text-cream text-xl font-bold mb-5">
                {member.initial}
              </div>
              <h3 className="text-xl font-bold text-forest">{member.name}</h3>
              <p className="text-gold font-medium text-sm mb-3">{member.title}</p>
              <p className="text-olive text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex flex-wrap gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold hover:text-forest transition-colors font-medium"
                  >
                    LinkedIn
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold hover:text-forest transition-colors font-medium"
                  >
                    GitHub
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm text-gold hover:text-forest transition-colors font-medium"
                  >
                    Email
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
