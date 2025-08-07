// src/pages/AboutPage.tsx
import React from "react";


 function About() {
  return (
    <main className="px-4 py-8 md:py-16 max-w-4xl mx-auto space-y-8">
      {/* Hero section */}
      <section className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/hero12.png"
          alt="Stack of books with keyboard (blog hero)"
          className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow-lg"
        />
        <div className="flex-1 space-y-4 text-gray-700">
          <h1 className="text-3xl font-bold text-gray-900">About the Blog</h1>
          <p>
            Welcome to <strong>The Tech Musings Blog</strong>— your daily dose
            of in‑depth articles on React, JavaScript, and modern web tooling.
            Since 2023, we’ve been helping developers stay sharp and ship better
            UI.
          </p>
          <p>
            Expect tutorials, code deep dives, personal reflections, and tips
            from the trenches. Whether you’re just starting or already coding
            production UIs, there’s something here for you.
          </p>
        </div>
      </section>

      {/* Team section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Meet the Team</h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-4">
          <img
            src="/hero12.png"
            alt="Portrait of the two blog authors"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />
          <div>
            <p className="font-medium text-lg">Jane Doe &amp; John Smith</p>
            <p className="text-gray-600">
              We’re engineers, ex‑design-tool hackers, and UI‑obsessives. You’ll
              often see our posts exploring full-stack React, Tailwind, and
              edge-backend magic.
            </p>
          </div>
        </div>
      </section>

      <figure className="mt-12 text-sm text-gray-500 text-center">
        <img
          src="/img9.png"
          alt="Coffee and code"
          className="mx-auto max-w-md w-full h-auto rounded-lg"
        />
        <figcaption>A workspace reading session at dusk.</figcaption>
      </figure>
    </main>
  );
}
export default About
