import { useMemo, useState } from 'react';
import {
  BookOpen,
  MessagesSquare,
  ListChecks,
  FileText,
  GraduationCap,
  LayoutGrid,
  Check,
  type LucideIcon,
} from 'lucide-react';
import { CalendarCheck, ListTree } from 'lucide-react';
import { modules, type ItemType, type Module, type SyllabusItem } from './data/syllabus';

type ViewMode = 'modules' | 'tasks';

const scheduleTypes: ItemType[] = ['task', 'assignment'];

function TasksSchedule() {
  const rows = modules.flatMap((m) =>
    m.items
      .filter((i) => scheduleTypes.includes(i.type))
      .map((i) => ({ module: m, item: i })),
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-[auto_1fr_auto] gap-x-3 gap-y-2 p-4 sm:grid-cols-[auto_1fr_auto_auto] sm:gap-x-4 sm:p-5">
        {rows.map((row, i) => {
          const meta = typeMeta[row.item.type];
          const Icon = meta.icon;
          return (
            <div
              key={i}
              className="contents"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-700 ring-1 ring-blue-100">
                {row.module.id}
              </span>
              <p className="self-center text-sm font-medium leading-snug text-slate-800">{row.item.label}</p>
              <span className={`inline-flex h-7 items-center gap-1.5 self-center rounded-full px-2.5 text-[11px] font-semibold uppercase tracking-wide ${meta.chip}`}>
                <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                {meta.label}
              </span>
              <span className="hidden self-center text-xs font-medium text-slate-500 sm:block">
                {row.module.weeks}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const typeMeta: Record<ItemType, { label: string; icon: LucideIcon; ring: string; chip: string; solid: string }> = {
  reading: {
    label: 'Topic',
    icon: BookOpen,
    ring: 'ring-blue-200',
    chip: 'bg-blue-50 text-blue-700',
    solid: 'bg-blue-600 border-blue-600 text-white',
  },
  discussion: {
    label: 'Task',
    icon: MessagesSquare,
    ring: 'ring-purple-200',
    chip: 'bg-purple-50 text-purple-700',
    solid: 'bg-purple-600 border-purple-600 text-white',
  },
  task: {
    label: 'Task',
    icon: ListChecks,
    ring: 'ring-amber-200',
    chip: 'bg-amber-50 text-amber-700',
    solid: 'bg-amber-500 border-amber-500 text-white',
  },
  assignment: {
    label: 'Assignment',
    icon: FileText,
    ring: 'ring-orange-200',
    chip: 'bg-orange-50 text-orange-700',
    solid: 'bg-orange-600 border-orange-600 text-white',
  },
};

const filterOrder: ItemType[] = ['reading', 'discussion', 'task', 'assignment'];

function ModuleCard({ module, filter }: { module: Module; filter: Set<ItemType> | null }) {
  const Icon = module.icon;
  const visibleItems: SyllabusItem[] = filter
    ? module.items.filter((i) => filter.has(i.type))
    : module.items;
  const hasVisible = visibleItems.length > 0;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md ${
        hasVisible ? 'border-blue-300 shadow-md' : 'border-slate-200 opacity-50'
      }`}
    >
      <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-500 to-sky-400" />
      <div className="flex w-full items-start gap-4 p-5 pl-7">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-white">
              Module {module.id}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">{module.weeks}</span>
          </div>
          <h3 className="mt-1.5 text-lg font-bold leading-snug text-slate-900">{module.title}</h3>
        </div>
      </div>

      {hasVisible ? (
        <ul className="space-y-2.5 px-7 pb-5">
          {visibleItems.map((item, i) => {
            const meta = typeMeta[item.type];
            const ItemIcon = meta.icon;
            return (
              <li
                key={i}
                className={`flex items-start gap-3 rounded-xl bg-slate-50/70 p-3 ring-1 ${meta.ring}`}
              >
                <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${meta.chip}`}>
                  <ItemIcon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium leading-snug text-slate-800">{item.label}</p>
                  {item.description && (
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.description}</p>
                  )}
                  <span className={`mt-1 inline-block text-[11px] font-semibold uppercase tracking-wide ${meta.chip} rounded`}>
                    {meta.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="px-7 pb-5 text-sm italic text-slate-400">No items match the selected filters.</p>
      )}
    </article>
  );
}

export default function App() {
  const [selected, setSelected] = useState<Set<ItemType>>(new Set());
  const [viewMode, setViewMode] = useState<ViewMode>('modules');
  const [activeModule, setActiveModule] = useState(1);

  const toggleFilter = (key: ItemType) => {
    setSelected((cur) => {
      const next = new Set(cur);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const activeFilter = selected.size === 0 ? null : selected;

  const visibleModules = useMemo(
    () => (activeFilter ? modules : modules),
    [activeFilter],
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-sky-100/50 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                <GraduationCap className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Visual Syllabus
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              ETEC 510: The Design of Technology-Supported Learning Environments
            </h1>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
              A 13-week journey through the design of technology-supported learning environments.
              Each module combines readings, discussions, hands-on tasks, and design projects
              that build toward a final curriculum user guide.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500">
                {modules.length} modules · 13 weeks · readings, discussions, design projects & tasks
              </span>
            </div>
          </div>
        </header>

        {/* Filter bar */}
        <section
          aria-label="Filter modules by item type"
          className="sticky top-3 z-10 mt-8 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <LayoutGrid className="h-3.5 w-3.5" strokeWidth={1.75} />
              Filter view
            </span>
            <button
              onClick={() => setSelected(new Set())}
              aria-pressed={selected.size === 0}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                selected.size === 0
                  ? 'border-slate-800 bg-slate-800 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" strokeWidth={1.75} />
              View All
            </button>
            {filterOrder.map((key) => {
              const meta = typeMeta[key];
              const Icon = meta.icon;
              const active = selected.has(key);
              return (
                <button
                  key={key}
                  onClick={() => toggleFilter(key)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                    active ? `${meta.solid} shadow-sm` : `${meta.chip} ring-1 ${meta.ring} hover:opacity-80`
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {meta.label}
                </button>
              );
            })}
          </div>
          <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
            Select one or more learning activity categories to filter the view.
          </p>

          {/* View mode toggle */}
          <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">View schedule by</span>
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
              <button
                onClick={() => setViewMode('modules')}
                aria-pressed={viewMode === 'modules'}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                  viewMode === 'modules'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                <ListTree className="h-3.5 w-3.5" strokeWidth={1.75} />
                Modules
              </button>
              <button
                onClick={() => setViewMode('tasks')}
                aria-pressed={viewMode === 'tasks'}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                  viewMode === 'tasks'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                <CalendarCheck className="h-3.5 w-3.5" strokeWidth={1.75} />
                Tasks & Assignments
              </button>
            </div>
          </div>
        </section>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Legend:</span>
          {filterOrder.map((key) => {
            const meta = typeMeta[key];
            const Icon = meta.icon;
            return (
              <span key={key} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
                <span className={`flex h-5 w-5 items-center justify-center rounded-md ${meta.chip}`}>
                  <Icon className="h-3 w-3" strokeWidth={1.75} />
                </span>
                {meta.label}
              </span>
            );
          })}
        </div>

        {/* Horizontal module stepper + detail or Tasks schedule */}
        {viewMode === 'tasks' ? (
          <div className="mt-6">
            <TasksSchedule />
          </div>
        ) : (
          <div className="mt-6">
            {/* Progress bar stepper */}
            <div className="relative mb-6">
              <div className="absolute left-0 right-0 top-5 h-1 rounded-full bg-slate-200" />
              <div
                className="absolute left-0 top-5 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500 ease-out"
                style={{
                  width: `${((activeModule - 1) / (modules.length - 1)) * 100}%`,
                }}
              />
              <div className="relative flex justify-between overflow-x-auto pb-1">
                {modules.map((m) => {
                  const Icon = m.icon;
                  const active = m.id === activeModule;
                  const completed = m.id < activeModule;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveModule(m.id)}
                      aria-pressed={active}
                      className="group flex shrink-0 flex-col items-center gap-2 px-1 transition-all duration-200 focus:outline-none"
                    >
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-sm transition-all duration-300 group-hover:scale-110 ${
                          active
                            ? 'border-blue-500 bg-blue-100 text-blue-700 ring-4 ring-blue-100'
                            : completed
                              ? 'border-blue-400 bg-blue-50 text-blue-500'
                              : 'border-slate-200 bg-white text-slate-400 group-hover:border-blue-300'
                        }`
                      }
                      >
                        {completed && !active ? (
                          <Check className="h-5 w-5" strokeWidth={2.5} />
                        ) : (
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        )}
                      </span>
                      <span
                        className={`text-[10px] font-semibold leading-tight transition-colors duration-200 ${
                          active
                            ? 'text-blue-700'
                            : completed
                              ? 'text-blue-500'
                              : 'text-slate-500 group-hover:text-blue-600'
                        }`
                      }
                      >
                        Module {m.id}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active module detail card */}
            {(() => {
              const m = modules.find((mod) => mod.id === activeModule) ?? modules[0];
              return <ModuleCard module={m} filter={activeFilter} />;
            })()}
          </div>
        )}

        <footer className="mt-8 text-center text-xs text-slate-400">
          ETEC 510 · The Design of Technology-Supported Learning Environments · Visual Syllabus
        </footer>
      </div>
    </div>
  );
}
