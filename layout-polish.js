(function () {
  const stateKey = 'ai-question-sidebar-collapsed';
  const iconByLabel = {
    '按章节/知识点选题': 'chapter.svg',
    '章节/知识点选题': 'chapter.svg',
    '从同步练习选题': 'sync.svg',
    '同步练习选题': 'sync.svg',
    '从练习册选题': 'workbook.svg',
    '练习册选题': 'workbook.svg',
    '从专题练习选题': 'special.svg',
    '专题练习选题': 'special.svg',
    '从试卷选题': 'paper.svg',
    '试卷选题': 'paper.svg',
    '从区本题库选题': 'school.svg',
    '区本题库选题': 'school.svg',
    '从校本题库选题': 'school.svg',
    '校本题库选题': 'school.svg',
    '上传文件 AI 录题': 'ai-record.svg',
    'AI 出题': 'ai-create.svg',
    'AI 组题': 'ai-compose.svg',
    '从我的资源选题': 'my-resources.svg',
    '我的资源选题': 'my-resources.svg',
    '继续最近浏览': 'recent.svg',
    '最近浏览': 'recent.svg'
  };
  const shortLabelByFullLabel = {
    '按章节/知识点选题': '章节知识点',
    '从同步练习选题': '同步',
    '从练习册选题': '练习册',
    '从专题练习选题': '专题',
    '从试卷选题': '试卷',
    '从区本题库选题': '区本',
    '从校本题库选题': '校本',
    '上传文件 AI 录题': 'AI录题',
    'AI 出题': 'AI出题',
    'AI 组题': 'AI组题',
    'AI智搜': 'AI智搜',
    '从我的资源选题': '我的资源',
    '继续最近浏览': '最近浏览'
  };

  function applyCollapsedLabels(sidebar, collapsed) {
    sidebar.querySelectorAll('.document-center-nav button').forEach(function (button) {
      const fullLabel = button.dataset.fullLabel || (button.getAttribute('aria-label') || button.textContent || '').trim();
      const label = button.querySelector(':scope > span:last-child');
      if (!label || !shortLabelByFullLabel[fullLabel]) return;
      button.dataset.fullLabel = fullLabel;
      button.title = fullLabel;
      button.setAttribute('aria-label', fullLabel);
      const targetLabel = collapsed ? shortLabelByFullLabel[fullLabel] : fullLabel;
      if (label.textContent !== targetLabel) label.textContent = targetLabel;
    });
  }

  const strokeIconByLabel = {
    '上传文件 AI 录题': '<svg class="nav-line-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7V5a2 2 0 0 1 2-2h2"/><path d="M16 3h2a2 2 0 0 1 2 2v2"/><path d="M20 17v2a2 2 0 0 1-2 2h-2"/><path d="M8 21H6a2 2 0 0 1-2-2v-2"/><path d="M12 8v8"/><path d="m9 11 3-3 3 3"/></svg>',
    'AI 出题': '<svg class="nav-line-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5"/><path d="M8 13h6"/><path d="M8 17h4"/><path d="M17 4.5 17.7 6.3 19.5 7 17.7 7.7 17 9.5 16.3 7.7 14.5 7 16.3 6.3 17 4.5z" fill="currentColor" stroke="none"/></svg>',
    'AI 组题': '<svg class="nav-line-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><path d="M8 9h6"/><path d="M18 3.2 18.6 4.8 20.2 5.4 18.6 6 18 7.6 17.4 6 15.8 5.4 17.4 4.8 18 3.2z" fill="currentColor" stroke="none"/></svg>',
    'AI智搜': '<svg class="nav-line-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m20 20-4.2-4.2"/><path d="M16.2 3.2 16.8 4.8 18.4 5.4 16.8 6 16.2 7.6 15.6 6 14 5.4 15.6 4.8 16.2 3.2z" fill="currentColor" stroke="none"/></svg>',
    'AI 智搜': '<svg class="nav-line-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m20 20-4.2-4.2"/><path d="M16.2 3.2 16.8 4.8 18.4 5.4 16.8 6 16.2 7.6 15.6 6 14 5.4 15.6 4.8 16.2 3.2z" fill="currentColor" stroke="none"/></svg>'
  };

  function applyDesignIcons(sidebar) {
    sidebar.querySelectorAll('.document-center-nav button, .source-navigation-icon-button').forEach(function (button) {
      const label = (button.dataset.fullLabel || button.getAttribute('aria-label') || button.textContent || '').trim();
      const stroke = strokeIconByLabel[label];
      if (stroke) {
        if (button.querySelector('.nav-line-icon')) return;
        const oldIcon = button.querySelector('.nav-design-icon-shell, svg, .source-navigation-short-icon');
        if (!oldIcon) return;
        const holder = document.createElement('span');
        holder.className = 'nav-design-icon-shell';
        holder.setAttribute('aria-hidden', 'true');
        holder.innerHTML = stroke;
        oldIcon.replaceWith(holder);
        return;
      }
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
    const sourceRail = document.querySelector('.source-navigation-rail');
    if (sourceRail) applyDesignIcons(sourceRail);
    if (!center || !sidebar) return;
    applyDesignIcons(sidebar);
    if (sidebar.querySelector('.layout-sidebar-toggle')) {
      applyCollapsedLabels(sidebar, center.classList.contains('is-layout-collapsed'));
      return;
    }

    const collapsed = window.localStorage.getItem(stateKey) === 'true';
    center.classList.toggle('is-layout-collapsed', collapsed);
    applyCollapsedLabels(sidebar, collapsed);

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
      applyCollapsedLabels(sidebar, next);
      window.localStorage.setItem(stateKey, String(next));
      button.setAttribute('aria-label', next ? '展开左侧导航' : '收起左侧导航');
      button.title = next ? '展开导航' : '收起导航';
      renderIcon();
    });

    renderIcon();
    sidebar.prepend(button);
  }

  const uploadIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';

  function polishSearchBar() {
    document.querySelectorAll('.global-resource-search').forEach(function (root) {
      const submit = root.querySelector('.global-resource-search-submit');
      if (submit) submit.hidden = true;
      const imageBtn = root.querySelector('.global-resource-search-image');
      if (!imageBtn || imageBtn.dataset.uploadIcon === '1') return;
      imageBtn.dataset.uploadIcon = '1';
      imageBtn.innerHTML = uploadIcon;
      imageBtn.setAttribute('aria-label', '上传图片搜题');
      imageBtn.title = '上传图片';
    });
  }

  function returnToWorkbenchHome() {
    const home = document.querySelector('.add-workspace-home');
    if (home) home.click();
  }

  function polishTopbar() {
    const topbar = document.querySelector('.add-workspace-topbar');
    if (!topbar) return;
    const brand = topbar.querySelector('.add-workspace-brand');
    if (brand && !brand.querySelector('.layout-topbar-back')) {
      const back = document.createElement('button');
      back.type = 'button';
      back.className = 'layout-topbar-back';
      back.setAttribute('aria-label', '返回');
      back.title = '返回';
      back.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>';
      back.addEventListener('click', returnToWorkbenchHome);
      brand.prepend(back);
    }
    if (!topbar.querySelector('.layout-project-crumb')) {
      const crumb = document.createElement('nav');
      crumb.className = 'layout-project-crumb';
      crumb.setAttribute('aria-label', '当前位置');
      crumb.innerHTML = '<span class="layout-product-home">首页</span><span class="layout-crumb-sep" aria-hidden="true">›</span><button type="button" class="layout-workbench-home">组题工作台</button>';
      crumb.querySelector('.layout-workbench-home').addEventListener('click', returnToWorkbenchHome);
      if (brand) brand.append(crumb);
      else topbar.prepend(crumb);
    }
    const existing = topbar.querySelector('.layout-project-crumb');
    if (brand && existing && existing.parentElement !== brand) brand.append(existing);
  }

  const observer = new MutationObserver(function () {
    mountToggle();
    polishSearchBar();
    polishTopbar();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', function () {
    mountToggle();
    polishSearchBar();
    polishTopbar();
  });
  mountToggle();
  polishSearchBar();
  polishTopbar();
})();
