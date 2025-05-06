import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'

export const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const totalStars = 5

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} className="w-5 h-5 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <StarIcon className="w-5 h-5 text-yellow-400 opacity-50" />
      )}
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <StarOutline key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  )
}
