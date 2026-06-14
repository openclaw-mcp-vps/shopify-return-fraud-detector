export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Fraud Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Return Fraud<br />
          <span className="text-[#58a6ff]">Before It Hits Your Wallet</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically analyze return requests, score customer risk, and flag suspicious patterns in your Shopify store — before you approve a single refund.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Protecting Your Store — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          {[
            ["94%", "Fraud Detection Rate"],
            ["2 min", "Setup Time"],
            ["$0", "Chargebacks Missed"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-[#8b949e] text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per store</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited return analysis",
              "Real-time fraud scoring",
              "Customer risk history",
              "Shopify webhook integration",
              "Email alerts for high-risk returns",
              "Dashboard with fraud trends"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Shopify store?",
              a: "After subscribing, you install our Shopify app in one click. It sets up webhooks automatically to receive return and order events in real time — no coding required."
            },
            {
              q: "What signals does the fraud detector use?",
              a: "We analyze return frequency, order age, product categories, customer account age, IP patterns, and historical return rates to generate a risk score for each request."
            },
            {
              q: "Will it block legitimate returns?",
              a: "No. The tool flags suspicious returns for your review — you always make the final call. It surfaces risk signals so you can make informed decisions, not automated rejections."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Shopify Return Fraud Detector. All rights reserved.
      </footer>
    </main>
  );
}
