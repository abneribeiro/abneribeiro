'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Você foi inscrito com sucesso!')
        setEmail('')
      } else {
        const data = await response.json()
        throw new Error(data.message || 'Ocorreu um erro')
      }
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Ocorreu um erro')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Seu endereço de e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
        />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Inscrevendo...' : 'Inscrever-se'}
        </Button>
      </div>
      {status === 'success' && <p className="text-green-600">{message}</p>}
      {status === 'error' && <p className="text-red-600">{message}</p>}
    </form>
  )
}