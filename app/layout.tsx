import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReceiptAI — AI Extracts Tax Deductions from Receipts',
  description: 'Automatically categorize expenses, extract tax-deductible items, and generate quarterly reports. Built for freelancers and independent contractors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bc2d4ec6-b312-4046-b1e8-79204d8edf5b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
