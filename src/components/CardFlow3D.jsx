import React, { useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

// Default mock data
const defaultItems = [
  { id: 1, title: 'Quantum Computing', description: 'Exploring the next frontier of processing power with qubits and superposition.' },
  { id: 2, title: 'Neural Networks', description: 'Deep learning architectures that mimic the human brain for advanced AI.' },
  { id: 3, title: 'Space Exploration', description: 'The journey to Mars and beyond, pushing the limits of human engineering.' },
  { id: 4, title: 'Cyber Security', description: 'Protecting digital assets in an increasingly connected and vulnerable world.' },
  { id: 5, title: 'Biotechnology', description: 'Modifying living organisms to develop new products and medical therapies.' },
  { id: 6, title: 'Renewable Energy', description: 'Harnessing solar, wind, and geothermal power for a sustainable future.' },
  { id: 7, title: 'Quantum Cryptography', description: 'Unbreakable encryption methods based on the principles of quantum mechanics.' },
  { id: 8, title: 'Nanotechnology', description: 'Manipulating matter on an atomic scale to create revolutionary new materials.' },
];

const CardContent = ({ item, isOverlay }) => (
  <div 
    className={clsx(
      "w-full h-full rounded-2xl p-6 flex flex-col justify-between shadow-2xl overflow-hidden relative group",
      isOverlay ? "ring-2 ring-white/20 bg-neutral-800" : "bg-neutral-900 border border-white/10"
    )}
    style={{
      background: isOverlay 
        ? `linear-gradient(135deg, #2a2a2a 0%, #111 100%)` 
        : `linear-gradient(135deg, #1f1f1f 0%, #0a0a0a 100%)`
    }}
  >
    {/* Subtle top glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-white/5 blur-[40px] pointer-events-none rounded-t-full transition-opacity duration-500 group-hover:bg-white/10" />
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
        <span className="text-white/80 font-bold font-mono">{item.id}</span>
      </div>
      <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">{item.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed line-clamp-4">{item.description}</p>
    </div>
    
    <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center relative z-10">
      <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Explore</span>
      <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/10">
        →
      </span>
    </div>
  </div>
);

const overlayVariants = {
  initial: (custom) => ({
    position: 'fixed',
    left: custom.centerX,
    top: custom.centerY,
    x: "-50%",
    y: "-50%",
    width: custom.cardWidth,
    height: custom.cardHeight,
    scale: custom.initialScale,
    filter: `blur(${custom.item.blur}px)`,
    opacity: custom.item.opacity,
    rotateX: custom.item.rotateX,
    rotateY: custom.item.rotateY,
  }),
  animate: (custom) => ({
    scale: custom.initialScale * 1.5, // Enlarge by 50% relative to visual size
    filter: 'blur(0px)',
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  }),
  exit: (custom) => {
    // Dynamically calculate the track item's current position so it returns smoothly
    const currentRect = custom.ref.current?.getBoundingClientRect();
    if (currentRect) {
      return {
        left: currentRect.left + currentRect.width / 2,
        top: currentRect.top + currentRect.height / 2,
        scale: currentRect.width / custom.cardWidth,
        filter: `blur(${custom.item.blur}px)`,
        opacity: custom.item.opacity,
        rotateX: custom.item.rotateX,
        rotateY: custom.item.rotateY,
        transition: { type: "spring", stiffness: 300, damping: 25 }
      };
    }
    // Fallback if ref is missing
    return { opacity: 0 };
  }
};

const OverlayCard = ({ activeItem, onClose }) => {
  const { item, rect, ref } = activeItem;
  
  const cardWidth = 300;
  const cardHeight = 400;
  
  // Stable reference for the initial render calculations
  const [initialMetrics] = useState(() => {
    return {
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
      initialScale: rect.width / cardWidth,
      cardWidth,
      cardHeight,
      item,
      ref
    };
  });

  return createPortal(
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />
      
      <motion.div
        custom={initialMetrics}
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="pointer-events-auto"
        onMouseLeave={onClose}
      >
        <CardContent item={item} isOverlay />
      </motion.div>
    </div>,
    document.body
  );
};

export default function CardFlow3D({ items = defaultItems }) {
  // Generate stable random 3D parameters for the original items
  const baseItemsWithParams = useMemo(() => {
    return items.map((item) => {
      const z = Math.random() * -800; // Depth: 0 to -800
      const y = (Math.random() - 0.5) * 300; // Y offset: -150 to 150
      
      const scale = 1 + (Math.random() * 0.2 - 0.1); // Small base scale variation
      const rotateX = (Math.random() - 0.5) * 20; // Slight tilt
      const rotateY = (Math.random() - 0.5) * 20;
      
      const blur = Math.max(0, (Math.abs(z) - 200) / 100); 
      const opacity = 1 - Math.abs(z) / 1200;
      
      return { ...item, y, z, scale, rotateX, rotateY, blur, opacity };
    });
  }, [items]);

  // Duplicate for seamless infinite loop
  const trackItems = useMemo(() => {
    return [...baseItemsWithParams, ...baseItemsWithParams].map((item, index) => ({
      ...item,
      uniqueId: `${item.id}-${index}` // Ensure totally unique keys for mapping
    }));
  }, [baseItemsWithParams]);

  const [activeItem, setActiveItem] = useState(null);
  const [hiddenId, setHiddenId] = useState(null);

  const handleHoverStart = (item, rect, ref) => {
    setActiveItem({ item, rect, ref });
    setHiddenId(item.uniqueId);
  };

  return (
    <div className="relative w-full h-[600px] bg-[#0f0f0f] overflow-hidden flex items-center">
      {/* Edge gradient masks for seamless fade out */}
      <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent z-10 pointer-events-none" />

      {/* 3D Perspective Container */}
      <div 
        className="w-full flex items-center" 
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="flex items-center"
        >
          {trackItems.map((item) => {
            const isHidden = hiddenId === item.uniqueId;
            return (
              <TrackCard 
                key={item.uniqueId} 
                item={item} 
                isHidden={isHidden}
                onHoverStart={handleHoverStart} 
              />
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence onExitComplete={() => setHiddenId(null)}>
        {activeItem && (
          <OverlayCard 
            key="overlay"
            activeItem={activeItem} 
            onClose={() => setActiveItem(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const TrackCard = ({ item, isHidden, onHoverStart }) => {
  const ref = useRef(null);
  
  // Independent floating animation for each card
  const floatY = useMemo(() => item.y + (Math.random() * 30 - 15), [item.y]);
  const duration = useMemo(() => 4 + Math.random() * 3, []);

  return (
    <motion.div
      ref={ref}
      animate={{ 
        y: [item.y, floatY, item.y],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      style={{
        width: 300,
        height: 400,
        z: item.z,
        scale: item.scale,
        rotateX: item.rotateX,
        rotateY: item.rotateY,
        filter: `blur(${item.blur}px)`,
        opacity: item.opacity,
        visibility: isHidden ? 'hidden' : 'visible'
      }}
      className="flex-shrink-0 mx-8 cursor-pointer relative"
      onMouseEnter={() => {
        if (!ref.current || isHidden) return;
        const rect = ref.current.getBoundingClientRect();
        onHoverStart(item, rect, ref);
      }}
    >
      <CardContent item={item} isOverlay={false} />
    </motion.div>
  );
};
