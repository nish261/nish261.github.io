import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, BookMarked } from 'lucide-react'
import Link from "next/link"

interface Category {
  name: string;
  count: number;
}

interface CategoriesSidebarProps {
  categories: Category[];
}

export function CategoriesSidebar({ categories }: CategoriesSidebarProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Categories</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className="flex items-center justify-between rounded-lg p-2 hover:bg-muted"
              >
                <span>{category.name}</span>
                <span className="text-sm text-muted-foreground">{category.count}</span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Quick Links</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Newspaper className="h-4 w-4" />
              Latest Posts
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BookMarked className="h-4 w-4" />
              Saved Posts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}