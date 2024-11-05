import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const subscribersFile = path.join(process.cwd(), 'data', 'subscribers.json')

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'E-mail inválido' }, { status: 400 })
    }

    let subscribers: string[] = []
    try {
      const data = await fs.readFile(subscribersFile, 'utf-8')
      subscribers = JSON.parse(data)
    } catch (error) {
      // Se o arquivo não existir, começamos com uma lista vazia
    }

    if (subscribers.includes(email)) {
      return NextResponse.json({ message: 'E-mail já cadastrado' }, { status: 400 })
    }

    subscribers.push(email)
    await fs.writeFile(subscribersFile, JSON.stringify(subscribers, null, 2))

    return NextResponse.json({ message: 'Inscrito com sucesso' }, { status: 200 })
  } catch (error) {
    console.error('Erro ao processar inscrição:', error)
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 })
  }
}