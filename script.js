/* ---------------- Course schedule data ---------------- */

const modules = [
  {
    id: 1,
    title: 'Introduction',
    weeks: 'Week 1',
    icon: 'bookOpen',
    items: [
      { label: 'Introduction: Media Education for the 21st Century', type: 'topic' },
      { label: "Let's get to know each other Digital Story", type: 'assignment' },
    ],
  },
  {
    id: 2,
    title: 'Designing Educational Futures, Now',
    weeks: 'Week 2',
    icon: 'compass',
    items: [
      {
        label: 'Design Primer', type: 'topic' },
      { label: 'Designing Social Futures Now', type: 'topic' },
      { label: 'The Teacher as Designer', type: 'topic'
      },
      { label: 'KeyWord Discussions (Post and Responses)', type: 'assignment' },
    ],
  },
  {
    id: 3,
    title: 'Designs for Thinking, Designs for Making',
    weeks: 'Weeks 3 – 5',
    icon: 'wrench',
    items: [
      {
        label: 'Situating Design', type: 'topic' },
      { label: 'Instructionism, Constructivism, and Constructionism', type: 'topic' },
      { label: 'Culture in Design and Designs for Participatory Competencies', type: 'topic'
      },
      { label: 'KeyWord Discussions (Post and Responses)', type: 'assignment' },
      { label: 'Playing with Design (due end of Week 5)', type: 'assignment' },
    ],
  },
  {
    id: 4,
    title: 'Inclusion by Design',
    weeks: 'Weeks 6 & 7',
    icon: 'shieldCheck',
    items: [
      {
        label: 'Digital Spaces & The Construction of Race', type: 'topic' },
      { label: 'Designing for Diverse Populations', type: 'topic' },
      { label: 'Gender, Difference, and Networked Media', type: 'topic'
      },
      { label: 'Keyword Discussion (Post and Responses)', type: 'assignment' },
      { label: 'Design Project Phase 1 - Proposal (due end of Week 7)', type: 'assignment' },
      { label: 'Design Project Phase 1 - Peer Feedback (due end of Week 7)', type: 'assignment' },
    ],
  },
];

/* ---------------- Type metadata ---------------- */

const typeMeta = {
  topic: { label: 'Topic', icon: 'bookOpen' },
  assignment: { label: 'Assignment', icon: 'fileText' },
};

const filterOrder = ['topic', 'assignment'];
const scheduleTypes = ['assignment'];

/* ---------------- Inline icon set (no external deps) ---------------- */

const icons = {
  graduationCap:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
  layoutGrid:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  listTree:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 6h4M3 12h4M3 18h4"/><path d="M11 6h10M11 12h7M11 18h4"/></svg>',
  calendarCheck:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><path d="m9 15 2 2 4-4"/></svg>',
  bookOpen:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M4 5c2.5-1 5-1 8 0v14c-3-1-5.5-1-8 0V5Z"/><path d="M20 5c-2.5-1-5-1-8 0v14c3-1 5.5-1 8 0V5Z"/></svg>',
  database:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>',
  wrench:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2Z"/></svg>',
  shieldCheck:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5Z"/><path d="m9 12 2 2 4-4"/></svg>',
  compass:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/></svg>',
  gauge:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 20a8 8 0 1 0-8-8"/><path d="M12 20v-4"/><path d="m8 12 4 0 3-4"/></svg>',
  map:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 6.5 9 4l6 2.5 6-2.5v13.5l-6 2.5-6-2.5-6 2.5V6.5Z"/><path d="M9 4v13.5M15 6.5V20"/></svg>',
  messageSquare:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>',
  listChecks:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="m3 7 3 3 5-5"/><path d="M13 6h8"/><path d="m3 17 3 3 5-5"/><path d="M13 18h8"/></svg>',
  fileText:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/></svg>',
};

function iconHtml(name, extraClass) {
  return `<span class="${extraClass || ''}">${icons[name] || ''}</span>`;
}

/* ---------------- State ---------------- */

let selectedTypes = new Set(); // empty = "view all"
let viewMode = 'modules'; // 'modules' | 'tasks'

/* ---------------- Helpers ---------------- */

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderMultilineLabel(str) {
  return escapeHtml(str).split('\n').join('<br />');
}

/* ---------------- Rendering: brand icon & static icon slots ---------------- */

function renderStaticIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.getAttribute('data-icon');
    if (icons[name]) el.innerHTML = icons[name];
  });
}

/* ---------------- Rendering: filter chips ---------------- */

function renderFilterChips() {
  const row = document.getElementById('filterRow');
  row.querySelectorAll('[data-type]').forEach((el) => el.remove());

  filterOrder.forEach((type) => {
    const meta = typeMeta[type];
    const btn = document.createElement('button');
    btn.className = 'filter-chip';
    btn.dataset.type = type;
    btn.setAttribute('aria-pressed', selectedTypes.has(type) ? 'true' : 'false');
    if (selectedTypes.has(type)) btn.classList.add('is-active');
    btn.innerHTML = `<span class="icon-sm">${icons[meta.icon]}</span>${meta.label}`;
    btn.addEventListener('click', () => toggleFilter(type));
    row.appendChild(btn);
  });
}

function toggleFilter(type) {
  if (selectedTypes.has(type)) {
    selectedTypes.delete(type);
  } else {
    selectedTypes.add(type);
  }
  syncFilterUI();
  renderContent();
}

function setViewAll() {
  selectedTypes = new Set();
  syncFilterUI();
  renderContent();
}

function syncFilterUI() {
  const viewAllBtn = document.getElementById('viewAllBtn');
  const isAll = selectedTypes.size === 0;
  viewAllBtn.classList.toggle('is-active', isAll);
  viewAllBtn.setAttribute('aria-pressed', isAll ? 'true' : 'false');

  document.querySelectorAll('.filter-chip[data-type]').forEach((btn) => {
    const active = selectedTypes.has(btn.dataset.type);
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

/* ---------------- Rendering: module timeline ---------------- */

function renderModuleCard(module) {
  const activeFilter = selectedTypes.size > 0 ? selectedTypes : null;
  const visibleItems = activeFilter ? module.items.filter((i) => activeFilter.has(i.type)) : module.items;
  const hasVisible = visibleItems.length > 0;

  const itemsHtml = hasVisible
    ? `<ul class="module-items">
        ${visibleItems
          .map(
            (item) => `
          <li class="module-item" data-type="${item.type}">
            <span class="module-item-icon">${icons[typeMeta[item.type].icon]}</span>
            <div class="module-item-body">
              <p class="module-item-label">${renderMultilineLabel(item.label)}</p>
              ${item.description ? `<p class="module-item-description">${escapeHtml(item.description)}</p>` : ''}
              <span class="module-item-type">${typeMeta[item.type].label}</span>
            </div>
          </li>`,
          )
          .join('')}
      </ul>`
    : `<p class="module-empty">No items match the selected filters.</p>`;

  return `
    <div class="timeline-row">
      <div class="timeline-badge">${module.id}</div>
      <article class="module-card ${hasVisible ? 'is-highlighted' : 'is-dimmed'}">
        <div class="module-card-stripe"></div>
        <div class="module-card-head">
          <div class="module-icon">${icons[module.icon]}</div>
          <div class="module-meta">
            <div class="module-meta-row">
              <span class="module-badge">Module ${module.id}</span>
              <span class="module-weeks">${module.weeks}</span>
            </div>
            <h3 class="module-title">${escapeHtml(module.title)}</h3>
          </div>
        </div>
        ${itemsHtml}
      </article>
    </div>`;
}

function renderModulesView() {
  return `
    <div class="timeline">
      <div class="timeline-line"></div>
      <div class="timeline-items">
        ${modules.map(renderModuleCard).join('')}
      </div>
    </div>`;
}

/* ---------------- Rendering: tasks & assignments table ---------------- */

function renderTasksView() {
  const rows = [];
  modules.forEach((m) => {
    m.items.filter((i) => scheduleTypes.includes(i.type)).forEach((item) => rows.push({ module: m, item }));
  });

  return `
    <div class="tasks-wrap">
      <div class="tasks-grid">
        ${rows
          .map(
            (row) => `
          <span class="task-num">${row.module.id}</span>
          <p class="task-label">${escapeHtml(row.item.label)}</p>
          <span class="task-chip" data-type="${row.item.type}">
            <span class="icon-sm">${icons[typeMeta[row.item.type].icon]}</span>
            ${typeMeta[row.item.type].label}
          </span>
          <span class="task-weeks">${row.module.weeks}</span>`,
          )
          .join('')}
      </div>
    </div>`;
}

/* ---------------- Main render ---------------- */

function renderContent() {
  const content = document.getElementById('content');
  content.innerHTML = viewMode === 'tasks' ? renderTasksView() : renderModulesView();
}

function renderSummary() {
  document.getElementById('summaryText').textContent =
    `${modules.length} modules · 13 weeks · 4 graded & choice-based tasks`;
}

function setViewMode(mode) {
  viewMode = mode;
  document.getElementById('viewModulesBtn').classList.toggle('is-active', mode === 'modules');
  document.getElementById('viewModulesBtn').setAttribute('aria-pressed', mode === 'modules' ? 'true' : 'false');
  document.getElementById('viewTasksBtn').classList.toggle('is-active', mode === 'tasks');
  document.getElementById('viewTasksBtn').setAttribute('aria-pressed', mode === 'tasks' ? 'true' : 'false');
  renderContent();
}

/* ---------------- Init ---------------- */

document.addEventListener('DOMContentLoaded', () => {
  renderStaticIcons();
  renderSummary();
  renderFilterChips();
  renderContent();

  document.getElementById('viewAllBtn').addEventListener('click', setViewAll);
  document.getElementById('viewModulesBtn').addEventListener('click', () => setViewMode('modules'));
  document.getElementById('viewTasksBtn').addEventListener('click', () => setViewMode('tasks'));
});
