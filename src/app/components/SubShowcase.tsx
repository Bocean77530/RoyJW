
import Link from 'next/link';
import Image from 'next/image';

export default function SubShowcase() {
    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Collection Introduction */}
            

            {/* Split Background */}
            <div className="absolute inset-0">
                <Link href="/">
                    <Image src="/image.png" width={500} height={500} alt="SubShowcase" className="w-full h-full object-contain" />
                </Link>
            </div>



            {/* Text Overlay */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-30">
                <div className="text-white">
                    <h2 className="text-4xl font-bold mb-2 tracking-wider drop-shadow-lg">
                        BLUE EYES WHITE DRAGON
                    </h2>
                    <h3 className="text-2xl font-bold mb-6 tracking-wider drop-shadow-lg">
                        NECKLACE
                    </h3>
                    <Link 
                        href="/" 
                        className="inline-block bg-gray-500/25 hover:bg-transparent text-shadow-lg border-gray-200 border-1  text-white font-medium py-3 px-6 transition-colors uppercase tracking-wide"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>

          
            
        </div>
    );
}