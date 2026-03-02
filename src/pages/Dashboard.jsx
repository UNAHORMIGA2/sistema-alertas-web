import { Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-lg font-bold mb-1">Sistema de Alertas</h2>
        <p className="text-xs text-gray-500 mb-8">
          Administración Sistema Central
        </p>

        <nav className="space-y-4 text-gray-700">
          <p className="cursor-pointer font-semibold text-blue-600">
            Dashboard
          </p>
          <p className="cursor-pointer hover:text-blue-600">Perfil</p>
          <p className="cursor-pointer hover:text-blue-600">
            Todas las Alertas
          </p>
          <p className="cursor-pointer hover:text-blue-600">
            Gestión de Usuarios
          </p>
          <p className="cursor-pointer hover:text-blue-600">
            Estadísticas
          </p>
          <p className="cursor-pointer hover:text-blue-600">Reportes</p>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-8">Todas las Alertas</h1>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard title="Total" value="2" />
          <StatCard title="Activas" value="2" />
          <StatCard title="Críticas" value="1" />
          <StatCard title="En Espera" value="0" />
        </div>

        {/* Filtros */}
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex items-center gap-4">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80">
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Buscar alerta..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <select className="border px-3 py-2 rounded-lg text-sm">
            <option>Todos los estados</option>
          </select>

          <select className="border px-3 py-2 rounded-lg text-sm">
            <option>Todas las prioridades</option>
          </select>
        </div>

        {/* Lista de Alertas */}
        <div className="space-y-6">

          <AlertCard
            titulo="Botón de Pánico"
            estado="En atención"
            prioridad="Crítica"
            color="red"
            nombre="Juan Pérez"
            direccion="Av. Independencia Pte 203 Ote, Centro de la Ciudad"
            fecha="31 de enero de 2026 - 15:35"
            unidad="María García"
          />

          <AlertCard
            titulo="Emergencia Médica"
            estado="Asignación en Proceso"
            prioridad="Alta"
            color="orange"
            nombre="Ana Martínez"
            direccion="Av. Reforma Sur #123"
            fecha="31 de enero de 2026 - 18:25"
            unidad="Carlos López"
          />

        </div>
      </main>
    </div>
  );
}

/* ---------- COMPONENTES ---------- */

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function AlertCard({
  titulo,
  estado,
  prioridad,
  color,
  nombre,
  direccion,
  fecha,
  unidad,
}) {
  const borderColor =
    color === "red"
      ? "border-red-500"
      : "border-orange-500";

  const badgeColor =
    color === "red"
      ? "bg-red-500"
      : "bg-orange-500";

  return (
    <div className={`bg-white p-6 rounded-xl shadow border ${borderColor}`}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">{titulo}</h3>
        <div className="flex gap-2">
          <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">
            {estado}
          </span>
          <span
            className={`text-white text-xs px-3 py-1 rounded-full ${badgeColor}`}
          >
            {prioridad}
          </span>
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p>👤 {nombre}</p>
        <p>📍 {direccion}</p>
        <p>🕒 {fecha}</p>
        <p>Unidad asignada: {unidad}</p>
      </div>
    </div>
  );
}