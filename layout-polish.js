(function () {
  const stateKey = 'ai-question-sidebar-collapsed';
  const iconByLabel = {
    '按章节/知识点选题': 'chapter.svg',
    '从同步练习选题': 'sync.svg',
    '从练习册选题': 'workbook.svg',
    '从专题练习选题': 'special.svg',
    '从试卷选题': 'paper.svg',
    '从区本题库选题': 'school.svg',
    '从校本题库选题': 'school.svg',
    '上传文件 AI 录题': 'ai-record.svg',
    'AI 出题': 'ai-create.svg',
    'AI 组题': 'ai-compose.svg',
    '从我的资源选题': 'my-resources.svg',
    '继续最近浏览': 'recent.svg'
  };

  function applyDesignIcons(sidebar) {
    sidebar.querySelectorAll('.document-center-nav button').forEach(function (button) {
      const label = (button.getAttribute('aria-label') || button.textContent || '').trim();
      const asset = iconByLabel[label];
      if (!asset || button.querySelector('.nav-design-icon')) return;
      const oldIcon = button.querySelector('svg');
      if (!oldIcon) return;
      const icon = document.createElement('img');
      icon.className = 'nav-design-icon';
      icon.src = './assets/nav-icons/' + asset;
      icon.alt = '';
      icon.setAttribute('aria-hidden', 'true');
      const shell = document.createElement('span');
      shell.className = 'nav-design-icon-shell';
      shell.setAttribute('aria-hidden', 'true');
      shell.appendChild(icon);
      oldIcon.replaceWith(shell);
    });
  }

  function mountToggle() {
    const center = document.querySelector('.document-center');
    const sidebar = center && center.querySelector('.document-center-sidebar');
    if (!center || !sidebar) return;
    applyDesignIcons(sidebar);
    if (sidebar.querySelector('.layout-sidebar-toggle')) return;

    const collapsed = window.localStorage.getItem(stateKey) === 'true';
    center.classList.toggle('is-layout-collapsed', collapsed);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'layout-sidebar-toggle';
    button.setAttribute('aria-label', collapsed ? '展开左侧导航' : '收起左侧导航');
    button.title = collapsed ? '展开导航' : '收起导航';

    function renderIcon() {
      const isCollapsed = center.classList.contains('is-layout-collapsed');
      button.innerHTML = isCollapsed
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m17 9-3 3 3 3"/></svg>';
    }

    button.addEventListener('click', function () {
      const next = !center.classList.contains('is-layout-collapsed');
      center.classList.toggle('is-layout-collapsed', next);
      window.localStorage.setItem(stateKey, String(next));
      button.setAttribute('aria-label', next ? '展开左侧导航' : '收起左侧导航');
      button.title = next ? '展开导航' : '收起导航';
      renderIcon();
    });

    renderIcon();
    sidebar.prepend(button);
  }

  const observer = new MutationObserver(mountToggle);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', mountToggle);
  mountToggle();
})();
