// ═══════════════════════════════════════════
// Claude Code 繁中文件 — 共用導航
// ═══════════════════════════════════════════

const NAV_ITEMS = [
  { href: 'index.html',    icon: '⌂', label: '首頁' },
  { section: '核心功能' },
  { href: 'desktop.html',  icon: '◧', label: '桌面版與 VS Code' },
  { href: 'skills.html',   icon: '⚡', label: 'Skills・MCP・Hooks' },
  { href: 'remote.html',   icon: '⊛', label: '遠端控制・頻道・代理' },
  { section: '設定與擴展' },
  { href: 'memory.html',   icon: '◈', label: '記憶・設定・權限' },
  { href: 'plugins.html',  icon: '⧉', label: 'Plugins 外掛系統' },
  { href: 'commands.html',  icon: '⌘', label: '命令・工具・進階設定' },
];

function getCurrentPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  return file;
}

function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const current = getCurrentPage();

  let html = `
    <div class="sidebar-logo">
      <h1>Claude Code</h1>
      <div class="subtitle">繁體中文完整指南</div>
    </div>
    <div class="sidebar-search">
      <input type="text" id="nav-search" placeholder="搜尋章節..." autocomplete="off" />
    </div>
    <nav class="sidebar-nav" id="sidebar-nav">
  `;

  NAV_ITEMS.forEach(item => {
    if (item.section) {
      html += `<div class="nav-section-label">${item.section}</div>`;
    } else {
      const active = current === item.href ? ' active' : '';
      html += `<a href="${item.href}" class="${active}">
        <span class="nav-icon">${item.icon}</span>
        ${item.label}
      </a>`;
    }
  });

  html += '</nav>';
  sidebar.innerHTML = html;

  // Search filtering
  const searchInput = document.getElementById('nav-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.sidebar-nav a').forEach(a => {
        const text = a.textContent.toLowerCase();
        a.style.display = text.includes(q) || !q ? '' : 'none';
      });
      document.querySelectorAll('.nav-section-label').forEach(l => {
        l.style.display = q ? 'none' : '';
      });
    });
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }
}

// TOC highlighting on scroll
function initTOC() {
  const toc = document.querySelector('.toc');
  if (!toc) return;

  const links = toc.querySelectorAll('a');
  const sections = [];

  links.forEach(link => {
    const id = link.getAttribute('href')?.replace('#', '');
    const el = document.getElementById(id);
    if (el) sections.push({ el, link });
  });

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const match = sections.find(s => s.el === entry.target);
      if (match) {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          match.link.classList.add('active');
        }
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s.el));
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  initMobileMenu();
  initTOC();
});
