import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CreatePost() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Start a Discussion</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="What's on your mind?" />
          <Button className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-90">
            Create Post
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}