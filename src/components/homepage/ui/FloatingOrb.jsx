const FloatingOrb = ({ className, delay = 0 }) => (
  <div 
    className={`absolute rounded-full blur-3xl opacity-30 animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

export default FloatingOrb;