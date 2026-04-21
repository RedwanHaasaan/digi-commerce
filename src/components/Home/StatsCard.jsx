export default function StatCard({ value, label, Icon, color, bg }) {
  return (
    <div
      className="group flex items-center gap-4 p-6 rounded-2xl 
      bg-white/70 backdrop-blur-md border border-gray-200
      shadow-md hover:shadow-xl 
      hover:-translate-y-1 transition-all duration-300"
    >
      {/* Icon */}
      <div
        className={`p-3 rounded-xl ${bg} ${color} 
        group-hover:scale-110 transition`}
      >
        {Icon && <Icon size={22} />}
      </div>

      {/* Text */}
      <div>
        <h3 className={`text-2xl font-bold ${color}`}>{value}</h3>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}