import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to see how your site could look?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Tell us a bit about your business — no pitch, no pressure. We&rsquo;ll
          tell you honestly whether we&rsquo;re a good fit.
        </p>
        <div className="mt-8 text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
