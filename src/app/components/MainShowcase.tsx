
import Image from 'next/image';
import Link from 'next/link';

export default function MainShowcase() {
    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Background Image with Blur Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-stone-200 to-amber-200">
                <div className="absolute inset-0 opacity-30 blur-sm bg-stone-300"></div>
            </div>

            {/* Central Pendant */}
            

            {/* Text Overlay */}
            <div className="absolute bottom-8 right-8 text-white z-30">
                <div className="text-right">
                    <div className="text-sm font-medium mb-2 tracking-wider">OFFICIAL COLLAB</div>
                    <div className="text-6xl font-bold mb-6 tracking-wider">VIRGO</div>
                    <Link 
                        href="/" 
                        className="inline-block bg-transparent hover:bg-black text-shadow-lg/20 border-2 border-white text-white font-medium py-3 px-6 transition-colors uppercase tracking-wide"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>

         
            
        </div>
    );
}