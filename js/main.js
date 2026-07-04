document.addEventListener("DOMContentLoaded", function() {
    // === 视频自动播放 ===
    const sectionVideos = document.querySelectorAll(".section-bg video");
    const fullBgVideos = document.querySelectorAll(".full-bg video");
    const allVideos = [...sectionVideos, ...fullBgVideos];

    function attemptPlay(video) {
        if (!video) return;
        video.muted = true;
        video.play().catch(e => {
            console.log("视频自动播放被阻止，等待用户交互");
            const playAll = () => {
                allVideos.forEach(v => v.play().catch(() => {}));
                document.removeEventListener("click", playAll);
                document.removeEventListener("touchstart", playAll);
            };
            document.addEventListener("click", playAll);
            document.addEventListener("touchstart", playAll);
        });
    }
    allVideos.forEach(video => {
        video.muted = true;
        attemptPlay(video);
    });

    // === 汉堡菜单 ===
    const toggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (toggle && navMenu) {
        toggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
        // 点击链接后关闭菜单
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('open'));
        });
    }

    // === 语言切换系统 ===
    const i18n = {
        zh: {
            nav_home: '首页',
            nav_about: '关于我',
            nav_tools: '工具介绍',
            nav_server: 'CatCraft Server',
            nav_team: '我的团队',
            hero_sub: 'Counter-Strike 2 · CatCraft Team · Ai · Live2D',
            hero_btn: '查看工具库',
            about_title: '关于我',
            about_p1: '你好，我是QingNiao。最近正在研究AI绘图、ComfyUI工作流、Live2D以及网页开发。',
            about_p2: '持续探索技术与艺术的结合点，分享实用工具与工作流。',
            projects_title: '项目展示',
            project_1: 'CatCraft MC Server<br><small>我的世界高版本Java小游戏服务端</small>',
            project_2: 'Github Web 代码<br><small>开源了一些由我本人主导的网页代码</small>',
            project_3: 'VapingCation Server (1.0.0-2.0.1)<br><small>我的世界Java 1.8.9 HvH 服务端</small>',
            contact_title: '联系方式',
            footer: 'By QingNiao © 2026',
            back_home: '返回首页',
            tools_title: '工具库',
            tool_Steam: 'Steam',
            tool_AMD: 'AMD驱动',
            tool_nvidia: 'nvidia驱动',
            tool_live2d: 'Live2D',
            tool_steamtools: 'SteamTools',
            download_btn: '下载工具',
            official_btn: '官方网站',
            team_intro: '团队介绍',
            team_membersCS2: '核心成员（CS2分部）',
            team_membersMC: '核心成员',
            team_news: '团队新闻',
            team_history: '发展历程'
        },
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_tools: 'Tools',
            nav_server: 'CatCraft Server',
            nav_team: 'My Team',
            hero_sub: 'Counter-Strike 2 · CatCraft Team · Ai · Live2D',
            hero_btn: 'View Tool Library',
            about_title: 'About Me',
            about_p1: 'Hi, I am QingNiao. Recently exploring AI art, ComfyUI workflows, Live2D, and web development.',
            about_p2: 'Continuously exploring the intersection of technology and art, sharing useful tools and workflows.',
            projects_title: 'Projects',
            project_1: 'CatCraft MC Server<br><small>Minecraft high-version Java minigame server</small>',
            project_2: 'Github Web Code<br><small>Open-sourced some web projects led by me</small>',
            project_3: 'VapingCation Server (1.0.0-2.0.1)<br><small>Minecraft Java 1.8.9 HvH server</small>',
            contact_title: 'Contact',
            footer: 'By QingNiao © 2026',
            back_home: 'Back to Home',
            tools_title: 'Tool Library',
            tool_Steam: 'Steam',
            tool_AMD: 'AMD Driver',
            tool_nvidia: 'nvidia Driver',
            tool_live2d: 'Live2D',
            tool_steamtools: 'SteamTools',
            download_btn: 'Download',
            official_btn: 'Official Site',
            team_intro: 'Team Intro',
            team_membersCS2: 'Core Members (CS2)',
            team_membersMC: 'Core Members (MC)',
            team_news: 'News',
            team_history: 'History'
        }
    };

    let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        // 更新所有带 data-i18n 的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                // 允许HTML内容
                el.innerHTML = i18n[lang][key];
            }
        });
        // 更新按钮状态
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        // 触发自定义事件，让其他脚本知道语言变了
        document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
    }

    // 语言切换按钮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // 初始设置
    setLanguage(currentLang);

    // 暴露给其他脚本
    window.__i18n = i18n;
    window.__currentLang = () => currentLang;
    window.__setLang = setLanguage;
});