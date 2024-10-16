'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <CardTitle className="text-2xl font-bold">TypeScript Project Steps</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <motion.ol 
            className="space-y-8 list-decimal list-inside"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.li 
              className="space-y-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-semibold text-gray-700">Open a new doc of a framework, any PDF of your choice:</p>
              <p className="text-sm text-gray-500 mb-2">
                (eg: https://developer.mozilla.org/en-US/docs/Web/JavaScript)
              </p>
              <Input 
                type="url" 
                placeholder="Enter your website link here"
                value={userLink}
                onChange={(e) => setUserLink(e.target.value)}
                className="w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </motion.li>
            <motion.li 
              className="space-y-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-semibold text-gray-700">Add the project link before the link you entered and then open it:</p>
              <Button 
                variant="outline" 
                onClick={openCombinedLink}
                className="w-full justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
              >
                Open Combined Link
              </Button>
              {userLink && (
                <p className="text-sm text-gray-500 mt-2">
                  Combined link: {projectLink}{userLink}
                </p>
              )}
            </motion.li>
            <motion.li 
              className="font-semibold text-gray-700"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A new page will open and the magic begins.
            </motion.li>
            <motion.li 
              className="font-semibold text-gray-700"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Now ask it anything about the website upon which it is prepared.
            </motion.li>
          </motion.ol>
        </CardContent>
      </Card>
    </div>
  )
}