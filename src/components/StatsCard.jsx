export default function StatsCard({ title, value, icon, bg }) {
  return (
    <div className={`rounded-2xl shadow-lg p-5 text-white flex items-center gap-4
                     bg-gradient-to-br ${bg || 'from-sky-600 to-sky-700'}
                     hover:shadow-2xl transition`}>
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm opacity-90">{title}</p>
        <p className="text-2xl font-bold">{value.toLocaleString()}</p>
      </div>
    </div>
  );
}
