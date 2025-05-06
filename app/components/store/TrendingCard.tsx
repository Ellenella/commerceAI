import { ScrollFadeIn } from "./ScrollFadeIn";

interface TrendingCardProps {
    title: string;
    price: string;
    imageUrl: string;
}

export function TrendingCard({ title, price, imageUrl }: TrendingCardProps) {
    return (
        <ScrollFadeIn>
            <div className="relative w-64 h-64 group">
                {/* Circular Image */}
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay with Title */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-full bg-white/50 backdrop-blur-md shadow-inner flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-black text-lg font-bold">{title}</h2>
                </div>
            </div>
            </ScrollFadeIn>
            )
}
