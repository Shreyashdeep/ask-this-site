'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [userLink, setUserLink] = useState('')
  const projectLink = 'https://ask-this-site.vercel.app/'

  const openCombinedLink = () => {
    if (userLink) {
      const combinedLink = `${projectLink}${userLink}`
      window.open(combinedLink, '_blank')
    } else {
      alert('Please enter a website link in step 1 before opening the combined link.')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">TypeScript Project Steps</h1>
      <ol className="space-y-6 list-decimal list-inside">
        <li className="space-y-2">
          <p>Open a new doc of a framework, any PDF of your choice:</p>
          <p className="text-sm text-muted-foreground mb-2">
            (eg: https://developer.mozilla.org/en-US/docs/Web/JavaScript)
          </p>
          <Input 
            type="url" 
            placeholder="Enter your website link here"
            value={userLink}
            onChange={(e) => setUserLink(e.target.value)}
            className="w-full max-w-md"
          />
        </li>
        <li className="space-y-2">
          <p>Add the project link before the link you entered and then open it:</p>
          <Button 
            variant="outline" 
            onClick={openCombinedLink}
            className="w-full max-w-md justify-center"
          >
            Open Combined Link
          </Button>
          {userLink && (
            <p className="text-sm text-muted-foreground">
              Combined link: {projectLink}{userLink}
            </p>
          )}
        </li>
        <li>A new page will open and the magic begins.</li>
        <li>Now ask it anything about the website upon which it is prepared.</li>
      </ol>
    </div>
  )
}