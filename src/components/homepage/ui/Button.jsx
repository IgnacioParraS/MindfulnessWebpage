const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
  const baseStyles = 'relative overflow-hidden font-medium tracking-wide transition-all duration-500 rounded-full inline-flex items-center justify-center leading-relaxed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-sage-600 to-sage-500 text-white hover:shadow-2xl hover:shadow-sage-500/30 hover:-translate-y-1',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20',
    outline: 'bg-transparent border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'
  };
  
  const sizes = {
    sm: 'px-6 py-2.5 text-sm min-h-[40px]',
    md: 'px-8 py-3.5 text-base min-h-[48px]',
    lg: 'px-12 py-4 text-lg min-h-[56px]'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10 px-4">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
    </button>
  );
};

export default Button;