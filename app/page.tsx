export default function Page() {
  const faqs = [
    {
      q: 'Which receipt formats are supported?',
      a: 'Upload JPG, PNG, or PDF receipts. Our AI reads handwritten and printed receipts from any vendor.'
    },
    {
      q: 'How accurate is the tax deduction extraction?',
      a: 'Powered by OpenAI Vision, accuracy exceeds 95% on standard receipts. You can review and edit every item before exporting.'
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes. Cancel with one click from your billing portal. No contracts, no cancellation fees.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered for Freelancers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          AI Extracts Tax Deductions<br />from Your Receipts
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Snap a receipt. Our AI categorizes expenses, flags every deductible item, and builds your quarterly tax report — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $35/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Receipt OCR & Vision AI', 'Auto Tax Categorization', 'Quarterly PDF Reports', 'Lemon Squeezy Billing'].map(f => (
            <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$35</p>
          <p className="text-sm text-[#6e7681] mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited receipt uploads',
              'AI deduction extraction',
              'Expense categorization',
              'Quarterly tax reports (PDF)',
              'CSV export for accountants',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#6e7681] mt-12">
          © {new Date().getFullYear()} ReceiptAI. Built for freelancers.
        </p>
      </section>
    </main>
  )
}
