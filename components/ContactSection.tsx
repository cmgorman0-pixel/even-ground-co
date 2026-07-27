export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to see how your site could look?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Book a free discovery call — no pitch, no pressure. We&rsquo;ll tell
          you honestly whether we&rsquo;re a good fit.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@evenground.com"
            className="rounded-full bg-clay px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-clay-dark"
          >
            hello@evenground.com
          </a>
        </div>
      </div>
    </section>
  );
}
