'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageSquare, Heart, Share2, BookMarked } from 'lucide-react'
import Link from "next/link"

interface Author {
  name: string;
  avatar: string;
}

interface Post {
  id: number;
  title: string;
  author: Author;
  excerpt: string;
  category: string;
  comments: number;
  likes: number;
  date: string;
}

interface PostCardProps {
  post: Post;
  variant?: 'discussion' | 'blog';
}

export function PostCard({ post, variant = 'discussion' }: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className={variant === 'discussion' ? "flex items-center gap-4" : ""}>
            {variant === 'discussion' && (
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            <div>
              <Link href="#" className="font-semibold hover:underline">
                {post.title}
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                {variant === 'blog' && (
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <span>{post.author.name}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <BookMarked className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {variant === 'discussion' && (
            <Button variant="ghost" size="sm" className="gap-1">
              <MessageSquare className="h-4 w-4" />
              {post.comments}
            </Button>
          )}
          <Button variant="ghost" size="sm" className="gap-1">
            <Heart className="h-4 w-4" />
            {post.likes}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        {variant === 'discussion' ? (
          <Link href="#" className="text-sm text-orange-500 hover:text-orange-600">
            {post.category}
          </Link>
        ) : (
          <Link href="#" className="text-sm text-orange-500 hover:text-orange-600">
            Read More →
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}