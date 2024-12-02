'use client'

import { useState } from "react"
import Head from "next/head"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PostCard } from "@/components/community/post-card"
import { CategoriesSidebar } from "@/components/community/categories-sidebar"
import { CreatePost } from "@/components/community/create-post"
import { posts, categories } from "@/lib/data/community"

export default function CommunityPage() {
  return (
    <main className="flex-1">
      <Head>
        <title>DDU Community Space - Dharma Down Under</title>
      </Head>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">DDU Community Space</h1>
          <p className="text-muted-foreground text-lg">Connect with Young Australian Dharmics</p>
        </div>
        <Tabs defaultValue="discussions" className="space-y-8 mx-auto max-w-7xl">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px] mx-auto">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
          </TabsList>
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <TabsContent value="discussions" className="mt-0 space-y-4">
              <CreatePost />
              {posts.map((post) => (
                <PostCard key={post.id} post={post} variant="discussion" />
              ))}
            </TabsContent>
            <TabsContent value="blogs" className="mt-0">
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} variant="blog" />
                ))}
              </div>
            </TabsContent>
            <CategoriesSidebar categories={categories} />
          </div>
        </Tabs>
      </div>
    </main>
  )
}