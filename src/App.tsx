import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AlertCircle } from "lucide-react"

export default function Component() {
  const [letters, setLetters] = useState(['', '', '', '', ''])
  const [error, setError] = useState('')

  const handleInputChange = (index: number, value: string) => {
    const newLetters = [...letters]
    newLetters[index] = value.toUpperCase()
    setLetters(newLetters)

    if (value && index < 4) {
      const nextInput = document.getElementById(`letter-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleValidate = () => {
    setError('Неправильно, можешь внимательно посмотришь на картинку?')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="flex flex-col items-center space-y-4">
          <img
            src="/Caesar.png?height=200&width=200"
            alt="Placeholder"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg shadow-lg"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-center">Женя с днем рождения 2024!</h2>
          <h4 className="text-m sm:text-m font-normal text-left">У тебя в поздравлении зашифрованно слово, тебе нужно его разгадать и ввести тут для дальнейших инструкций! Удачи!</h4>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center space-x-2">
            {letters.map((letter, index) => (
              <Input
                key={index}
                id={`letter-${index}`}
                value={letter}
                onChange={(e) => handleInputChange(index, e.target.value)}
                maxLength={1}
                className="w-10 h-10 sm:w-12 sm:h-12 text-center text-xl sm:text-2xl font-bold"
                aria-label={`Letter ${index + 1}`}
              />
            ))}
          </div>
          {error && (
            <div className="flex items-center justify-center space-x-2 text-red-500">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleValidate} className="w-full text-lg">
            Ввести шифр из пяти букв! 🕵️🕵️
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}