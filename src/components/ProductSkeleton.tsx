// app/components/product-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductSkeleton() {
  return (
    
    <div className="flex flex-row space-y-3 gap-[0.907vw]">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      ))}
    </div>
  )
}

