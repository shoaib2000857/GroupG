'use client'
import React, { useState } from "react";
import axios from "axios";

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [error, setError] = useState(null)
  const [data, setData] = useState({ prompt: '', type: '' })

  const postData = (event) => setData({ ...data, [event.target.name]: event.target.value })
  const onSubmit = async (event) => {
    try {
      setIsLoading(true)
      setError(null)
      setResponse(null)
      event.preventDefault()
      const result = await axios.post('/api/gemini', { ...data })
      console.log(result);
      if (result.data.success) {
        setResponse(await result.data.data)
      } else {
        setError(result.data.message || "Opps! Something went wrong!")
      }

      setData({ prompt: '', type: '' })

    } catch (error) {
      setError(error.message || "Something went wrong!")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="bg-green-200 text-green-900 p-8">
      <h1 className="text-4xl font-bold text-green-700">
        Gen AI Exchange Hackathon by Google
      </h1>
      {response && <p className="text-xl font-bold text-green-500">{response}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
