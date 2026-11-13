(function () {
  const stateKey = 'ai-question-sidebar-collapsed';

  function mountToggle() {
    const center = document.querySelector('.document-center');
    const sidebar = center && center.querySelector('.document-center-sidebar');
    if (!center || !sidebar || sidebar.querySelector('.layout-sidebar-toggle')) return;

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
