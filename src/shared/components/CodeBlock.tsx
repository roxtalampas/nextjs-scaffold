'use client'

import { useState } from 'react'

interface CodeBlockProps {
  command: string
  className?: string
}

export default function CodeBlock({ command, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div
      className={`group relative flex items-center ${className}`}
    >
      <code
        className="relative flex items-center w-full justify-between text-sm text-nowrap transition-colors cursor-pointer"
        onClick={handleCopy}
      >
        <div className="text-zinc-500">$ <span className='text-zinc-100 font-mono hover:text-white'>{command}</span></div>
        <button
          className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800/90 hover:bg-zinc-700/90 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600 text-zinc-300 hover:text-white text-xs font-medium shadow-lg hover:shadow-xl hover:scale-105 z-10"
          onClick={handleCopy}
          aria-label="Copy command"
          title="Click to copy"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </code>
    </div>
  )
}
