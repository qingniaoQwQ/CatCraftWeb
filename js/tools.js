const toolI18n = {
    zh: {
        Steam: {
            title: "Steam",
            desc: "Steam全球最大的游戏平台之一",
            download: "https://store.steampowered.com/about/",
            official: "https://store.steampowered.com/about/",
            images: ["images/tools/Steam/sd1.png", "images/tools/Steam/sd2.png"],
            info: `
                <h2>简介</h2>
                <p>Steam是全球最大的游戏平台只有，其中有许多游戏，一定有你喜欢的。</p>
                <h2>推荐游戏</h2>
                <ul><li>CS2（高竞技性）</li><li>地平线系列</li><li>Wallpaper Engine</li></ul>
            `
        },
        AMD: {
            title: "AMD驱动",
            desc: "AMD系列显卡或处理器（CPU）驱动",
            download: "https://www.amd.com/zh-cn/support/download/drivers.html",
            official: "https://www.amd.com/zh-cn/support/download/drivers.html",
            images: ["images/tools/AMD GPU/amd1.png", "images/tools/AMD GPU/amd2.png"],
            info: `
                <h2>工具简介</h2>
                <p>用于驱动AMD显卡 Windows® 10/11 驱动程序。</p>
                <h2>优势</h2>
                <ul><li>自动检测并安装 AMD Radeon 系列显卡和锐龙芯片组的驱动程序更新</li></ul>
            `
        },
        nvidia: {
            title: "nvidia驱动",
            desc: "nvidia系列显卡驱动",
            download: "https://www.nvidia.cn/drivers/",
            official: "https://www.nvidia.cn/drivers/",
            images: ["images/tools/nvidia gpu/nvidia1.png", "images/tools/nvidia gpu/nvidia2.png", "images/tools/nvidia gpu/nvidia3.png", "images/tools/nvidia gpu/nvidia4.png"],
            info: `
                <h2>工具简介</h2>
                <p>用于驱动nvidia显卡 Windows® 10/11 驱动程序。</p>
                <h2>提示</h2>
                <ul><li>需要自行选择自己的显卡型号并进行安装</li></ul>
            `
        },
        live2d: {
            title: "Live2D",
            desc: "2D 角色动态化技术，虚拟主播与游戏常用",
            download: "https://www.live2d.com/download/cubism/",
            official: "https://www.live2d.com",
            images: ["images/tools/Live2D/lv2d.png"],
            info: `
                <h2>工具简介</h2>
                <p>Live2D 能够将二维插画通过网格变形实现平滑的动画效果，广泛应用于虚拟主播、手机游戏等。</p>
                <h2>常用软件</h2>
                <ul><li>Cubism Editor（官方制作工具）</li><li>VTube Studio（面部捕捉驱动）</li></ul>
            `
        },
        steamtools: {
            title: "SteamTools",
            desc: "Steam 快速登录、批量管理、授权登录、游戏更新。畅玩正版游戏，云存档、成就、远程同乐、多人联机、创意工坊",
            download: "https://www.steamtools.net/",
            official: "https://www.steamtools.net/",
            images: ["images/tools/Steam tools/Steam1.png", "images/tools/Steam tools/Steam2.png"],
            info: `
                <h2>工具简介</h2>
                <p>SteamTools 快速登录、批量管理、授权登录、游戏更新。畅玩正版游戏，云存档、成就、远程同乐、多人联机、创意工坊。</p>
                <h2>主要功能</h2>
                <ul><li>游戏本地解锁</li><li>成就管理与快速切换账号</li></ul>
            `
        }
    },
    en: {
        Steam: {
            title: "Steam",
            desc: "One of the world's largest gaming platforms",
            download: "https://store.steampowered.com/about/",
            official: "https://store.steampowered.com/about/",
            images: ["images/tools/Steam/sd1.png", "images/tools/Steam/sd2.png"],
            info: `
                <h2>Introduction</h2>
                <p>Steam is the world's largest gaming platform with a huge library of games.</p>
                <h2>Recommended Games</h2>
                <ul><li>CS2 (highly competitive)</li><li>Horizon series</li><li>Wallpaper Engine</li></ul>
            `
        },
        AMD: {
            title: "AMD Driver",
            desc: "Drivers for AMD graphics cards and processors",
            download: "https://www.amd.com/en/support/download/drivers.html",
            official: "https://www.amd.com/en/support/download/drivers.html",
            images: ["images/tools/AMD GPU/amd1.png", "images/tools/AMD GPU/amd2.png"],
            info: `
                <h2>About</h2>
                <p>Windows® 10/11 driver for AMD Radeon graphics cards and Ryzen chipsets.</p>
                <h2>Advantages</h2>
                <ul><li>Auto-detects and installs updates for AMD Radeon and Ryzen</li></ul>
            `
        },
        nvidia: {
            title: "nvidia Driver",
            desc: "Drivers for nvidia graphics cards",
            download: "https://www.nvidia.com/Download/index.aspx",
            official: "https://www.nvidia.com/Download/index.aspx",
            images: ["images/tools/nvidia gpu/nvidia1.png", "images/tools/nvidia gpu/nvidia2.png", "images/tools/nvidia gpu/nvidia3.png", "images/tools/nvidia gpu/nvidia4.png"],
            info: `
                <h2>About</h2>
                <p>Windows® 10/11 driver for nvidia graphics cards.</p>
                <h2>Note</h2>
                <ul><li>Select your specific GPU model and install manually</li></ul>
            `
        },
        live2d: {
            title: "Live2D",
            desc: "2D character animation technology, used in VTubing and games",
            download: "https://www.live2d.com/en/download/cubism/",
            official: "https://www.live2d.com/en/",
            images: ["images/tools/Live2D/lv2d.png"],
            info: `
                <h2>About</h2>
                <p>Live2D allows smooth animation of 2D illustrations via mesh deformation, widely used in VTubers, mobile games, etc.</p>
                <h2>Common Software</h2>
                <ul><li>Cubism Editor (official tool)</li><li>VTube Studio (face-tracking driver)</li></ul>
            `
        },
        steamtools: {
            title: "SteamTools",
            desc: "Quick login, batch management, authorization, game updates. Play genuine games with cloud saves, achievements, remote play, multiplayer, workshop",
            download: "https://www.steamtools.net/",
            official: "https://www.steamtools.net/",
            images: ["images/tools/Steam tools/Steam1.png", "images/tools/Steam tools/Steam2.png"],
            info: `
                <h2>About</h2>
                <p>SteamTools provides fast login, batch management, authorization, and game updates. Enjoy genuine games with cloud saves, achievements, remote play, multiplayer, and workshop.</p>
                <h2>Key Features</h2>
                <ul><li>Local game unlock</li><li>Achievement management and quick account switching</li></ul>
            `
        }
    }
};

let currentImages = [];
let currentIndex = 0;
let sliderTimer = null;

function startSlider() {
    if (sliderTimer) clearInterval(sliderTimer);
    if (!currentImages.length) return;
    sliderTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        const imgElem = document.getElementById("sliderImage");
        if (imgElem) imgElem.src = currentImages[currentIndex];
    }, 3000);
}

function showTool(id, btn) {
    const lang = window.__currentLang ? window.__currentLang() : 'zh';
    const dict = toolI18n[lang] || toolI18n.zh;
    const tool = dict[id];
    if (!tool) return;

    document.getElementById("toolTitle").innerHTML = tool.title;
    document.getElementById("toolDesc").innerHTML = tool.desc;
    document.getElementById("toolInfo").innerHTML = tool.info;
    document.getElementById("downloadBtn").href = tool.download;
    document.getElementById("officialBtn").href = tool.official;

    currentImages = tool.images;
    currentIndex = 0;
    const sliderImg = document.getElementById("sliderImage");
    if (currentImages.length) sliderImg.src = currentImages[0];
    else sliderImg.src = "";

    startSlider();

    document.querySelectorAll(".tool-btn").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('langChanged', (e) => {
        const currentTool = document.querySelector(".tool-btn.active")?.dataset.tool || 'Steam';
        showTool(currentTool, document.querySelector(`.tool-btn[data-tool="${currentTool}"]`));
    });

    const btns = document.querySelectorAll(".tool-btn[data-tool]");
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            const toolId = btn.getAttribute("data-tool");
            showTool(toolId, btn);
        });
    });
    const defaultBtn = document.querySelector(".tool-btn[data-tool='Steam']");
    if (defaultBtn) showTool("Steam", defaultBtn);
});