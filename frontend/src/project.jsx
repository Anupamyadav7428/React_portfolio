import { useEffect, useRef, useState } from 'react';
import emotion from './assets/Emotion_detection.png';
import brain from './assets/brain.png';
import hr from './assets/virtual_hr.png';
import portfolio from './assets/portfolio_img.png';
import object from './assets/object_Detection.jpg';
import Zoom from './assets/Zoom_clone.png';
import './project.css';

export default function Project() {
    const cards = [
        { id: 1, img: hr, title: 'Virtual HR', desc: "AI-powered proctoring tool for secure, real-time exam monitoring using facial recognition and activity tracking.", link: "https://hr.megavaultbox.com/" },
        { id: 2, img: Zoom, title: 'Zoom Clone', desc: "React and Django-based video conferencing app with JWT authentication, real-time audio/video calls, and WebSocket messaging.", link: "https://github.com/yourusername/zoom-clone" },
        { id: 3, img: object, title: 'Object Detection', desc: "Computer vision project using OpenCV and deep learning to detect and classify multiple objects in real time from media streams.", link: "https://github.com/yourusername/object-detection" },
        { id: 4, img: brain, title: 'Brain Tumor Detection', desc: "Machine learning system trained on MRI scans to identify and locate brain tumors with high accuracy for medical assistance.", link: "https://github.com/yourusername/brain-tumor-detection" },
        { id: 5, img: portfolio, title: 'My Portfolio', desc: "Responsive and interactive personal portfolio showcasing projects, skills, and experience with clean UI, animations, and smooth navigation.", link: "https://github.com/yourusername/portfolio" },
        { id: 6, img: emotion, title: 'Emotion Detection', desc: "Deep learning project using FER-2013 dataset to analyze facial expressions and accurately classify human emotions in real time.", link: "https://github.com/yourusername/emotion-detection" }
    ];

    const scrollRef = useRef(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const resumeTimeout = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        let animationId;
        const scrollSpeed = 1;

        const step = () => {
            if (isAutoScrolling && container) {
                container.scrollLeft += scrollSpeed;
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(step);
        };

        step();
        return () => cancelAnimationFrame(animationId);
    }, [isAutoScrolling]);

    const handleScroll = () => {
        setIsAutoScrolling(false);
        if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
        resumeTimeout.current = setTimeout(() => setIsAutoScrolling(true), 1000);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-r bg-gray-100 flex justify-center items-center">
            <div className='w-[1100px] overflow-hidden'>
                <h1 className='text-4xl text-black font-bold mb-4'>Project Section</h1>
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className='flex flex-row w-full overflow-x-auto gap-4 px-4 scrollbar-hide'
                >
                    {[...cards, ...cards].map((card, index) => (
                        <div
                            key={index}
                            className='shrink-0 card h-96 w-80 rounded-2xl bg-white/10 backdrop-blur-2xl border border-blue-700/20 shadow-lg flex flex-col items-center p-4 transition-transform duration-500 hover:scale-105 mt-4 mb-4'
                        >
                            <img src={card.img} alt={card.title} className='w-full h-1/2 object-cover rounded mb-4 border-4 border-white/30' />
                            <h2 className='text-black text-xl font-bold mb-2'>{card.title}</h2>
                            <p className='text-black/80 text-sm text-center'>{card.desc}</p>
                            <a href={card.link} target="_blank" rel="noopener noreferrer">
                                <button className="mt-2 border border-blue-700 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors">
                                    Link
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
