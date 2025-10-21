// ==========================================
// 移动端导航菜单切换
// ==========================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // 切换图标
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 点击菜单项后关闭菜单
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ==========================================
// 平滑滚动效果
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 减去导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// 导航栏滚动效果
// ==========================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // 滚动时添加阴影
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// ==========================================
// 返回顶部按钮
// ==========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// 技能进度条动画
// ==========================================
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (barPosition < screenPosition) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
};

// 初始检查
animateSkillBars();

// 滚动时检查
let isAnimating = false;
window.addEventListener('scroll', () => {
    if (!isAnimating) {
        isAnimating = true;
        setTimeout(() => {
            animateSkillBars();
            isAnimating = false;
        }, 100);
    }
});

// ==========================================
// 元素滚动淡入效果
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察需要动画的元素
const animateElements = document.querySelectorAll(
    '.timeline-item, .project-card, .education-card, .contact-card, .skill-card, .highlight-item'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// 活动导航链接高亮
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--primary-color)';
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ==========================================
// 打字机效果（可选）
// ==========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 页面加载完成后的初始化
window.addEventListener('load', () => {
    // 可以在这里添加页面加载完成后的初始化代码
    console.log('? 个人简历网站加载完成！');
    
    // 如果想要标题打字机效果，可以取消下面的注释
    // const heroTitle = document.querySelector('.hero-title');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typeWriter(heroTitle, originalText, 100);
    // }
});

// ==========================================
// 技能标签点击效果（可选）
// ==========================================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.background = 'var(--primary-color)';
        tag.style.color = 'var(--white)';
        
        setTimeout(() => {
            tag.style.background = '';
            tag.style.color = '';
        }, 300);
    });
});

// ==========================================
// 防抖函数优化性能
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 使用防抖优化滚动事件
const optimizedScroll = debounce(() => {
    highlightNavigation();
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ==========================================
// 控制台彩蛋
// ==========================================
console.log('%c? 欢迎查看我的简历！', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%c如果您对我感兴趣，欢迎联系我！', 'font-size: 14px; color: #6b7280;');
console.log('%c本网站使用纯HTML+CSS+JS构建', 'font-size: 12px; color: #10b981;');

// ==========================================
// 简历下载功能（连接到实际PDF文件）
// ==========================================
const downloadButtons = document.querySelectorAll('a[download]');

downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // 如果还没有实际的PDF文件，显示提示
        if (!button.getAttribute('href') || button.getAttribute('href') === '#') {
            e.preventDefault();
            alert('? 提示：请先将您的PDF简历文件命名为"resume.pdf"并放在网站根目录，然后将按钮的href属性改为"./resume.pdf"');
        }
    });
});

// ==========================================
// 联系方式复制功能
// ==========================================
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    const paragraph = card.querySelector('p');
    if (paragraph && !card.href) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const text = paragraph.textContent;
            
            // 尝试复制到剪贴板
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    // 显示复制成功提示
                    const originalText = paragraph.textContent;
                    paragraph.textContent = '? 已复制！';
                    paragraph.style.color = 'var(--secondary-color)';
                    
                    setTimeout(() => {
                        paragraph.textContent = originalText;
                        paragraph.style.color = '';
                    }, 2000);
                }).catch(err => {
                    console.error('复制失败:', err);
                });
            }
        });
    }
});

// ==========================================
// 深色模式切换（可选功能）
// ==========================================
// 如果想添加深色模式，可以取消注释以下代码：

/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.style.cssText = `
    position: fixed;
    bottom: 6rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--gradient-blue);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.25rem;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    z-index: 999;
    transition: all 0.3s ease;
`;

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
*/

// ==========================================
// 项目详情模态框功能
// ==========================================
function openProjectModal(headerElement) {
    const projectCard = headerElement.parentElement;
    const projectDetails = projectCard.querySelector('.project-details');
    const projectName = projectCard.querySelector('.project-name').textContent;
    
    // 获取模态框元素
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('projectModalBody');
    
    // 克隆项目详情内容
    const detailsClone = projectDetails.cloneNode(true);
    detailsClone.style.display = 'block';
    
    // 创建模态框标题
    const modalTitle = document.createElement('h2');
    modalTitle.className = 'project-modal-title';
    modalTitle.textContent = projectName;
    
    // 清空并填充模态框内容
    modalBody.innerHTML = '';
    modalBody.appendChild(modalTitle);
    modalBody.appendChild(detailsClone);
    
    // 显示模态框
    modal.classList.add('show');
    
    // 禁止页面滚动
    document.body.style.overflow = 'hidden';
}

// 关闭项目详情模态框
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    
    // 隐藏模态框
    modal.classList.remove('show');
    modal.style.display = '';
    
    // 重置隐藏标志
    projectModalHidden = false;
    
    // 恢复页面滚动
    document.body.style.overflow = '';
}

// 点击模态框背景关闭
const projectModal = document.getElementById('projectModal');
if (projectModal) {
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// ==========================================
// 视频播放模态框功能
// ==========================================
// 记录项目弹窗是否被暂时隐藏（用于恢复）
let projectModalHidden = false;

// 视频路径配置 - 请将视频文件放在 videos 文件夹中
const videoSources = {
    'video-breath-light': './videos/breath-light.mp4',          // ESP32情绪呼吸灯项目视频
    'video-esp32-bike': './videos/CycloComputer.mp4',           // ESP32P4码表项目 - 码表功能演示
    'video-dji-camera': './videos/DJI-camera-live-streaming.mp4', // ESP32P4码表项目 - DJI相机直播演示
    'video-dji-remote': './videos/DJI Camera Remote Controller.mp4', // ESP32P4码表项目 - DJI相机遥控演示
    'video-agriculture': './videos/Agricultural Greenhouse Monitoring System Based on STM32.mp4', // STM32智能农业监测项目
    'video-aquaculture': './videos/artificial-freshwater-lake-aquaculture-system-based-on-stm32.mp4', // STM32人工淡水湖养殖系统
    'video-balance-car': './videos/BalanceCar.mp4',             // 二轮自动平衡小车项目视频
    // 可以添加更多视频：
    // 'video-project-8': './videos/project8.mp4',
};

// 打开视频模态框
function openVideoModal(videoId) {
    // 检查项目模态框是否打开，如果是则暂时隐藏（不关闭）
    const projectModal = document.getElementById('projectModal');
    if (projectModal && projectModal.classList.contains('show')) {
        projectModal.style.display = 'none';
        projectModalHidden = true;
    } else {
        projectModalHidden = false;
    }
    
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const videoSource = document.getElementById('videoSource');
    
    // 设置视频源
    if (videoSources[videoId]) {
        videoSource.src = videoSources[videoId];
        video.load();
        
        // 显示模态框
        modal.classList.add('show');
        
        // 禁止页面滚动
        document.body.style.overflow = 'hidden';
        
        // 自动播放视频
        video.play().catch(err => {
            console.log('视频自动播放失败，需要用户手动点击播放');
        });
    } else {
        alert('⚠️ 视频文件未找到！\n\n请确保：\n1. 在项目根目录创建 videos 文件夹\n2. 将视频文件放入 videos 文件夹\n3. 视频文件命名为：' + videoId.replace('video-', '') + '.mp4');
    }
}

// 关闭视频模态框
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    // 停止视频播放
    video.pause();
    video.currentTime = 0;
    
    // 隐藏模态框
    modal.classList.remove('show');
    
    // 如果项目弹窗之前被隐藏了，恢复显示
    if (projectModalHidden) {
        const projectModal = document.getElementById('projectModal');
        if (projectModal) {
            projectModal.style.display = 'flex';
        }
        projectModalHidden = false;
    } else {
        // 恢复页面滚动（只有在没有恢复项目弹窗时才恢复滚动）
        document.body.style.overflow = '';
    }
}

// 点击模态框背景关闭
const videoModal = document.getElementById('videoModal');
if (videoModal) {
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
}

// ESC键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const videoModal = document.getElementById('videoModal');
        if (videoModal && videoModal.classList.contains('show')) {
            closeVideoModal();
        }
        const imageModal = document.getElementById('imageModal');
        if (imageModal && imageModal.classList.contains('show')) {
            closeImageModal();
        }
        const projectModal = document.getElementById('projectModal');
        if (projectModal && projectModal.classList.contains('show')) {
            closeProjectModal();
        }
    }
});

// ==========================================
// 图片查看器功能
// ==========================================
// 图片数据配置
const imageGalleries = {
    'fatigue-driving': [
        './photo/fatigue_driving_detection_system/1.jpg',
        './photo/fatigue_driving_detection_system/2.jpg',
        './photo/fatigue_driving_detection_system/3.jpg',
        './photo/fatigue_driving_detection_system/4.jpg',
        './photo/fatigue_driving_detection_system/5.jpg',
        './photo/fatigue_driving_detection_system/6.jpg',
        './photo/fatigue_driving_detection_system/7.jpg'
    ]
};

let currentGallery = '';
let currentImageIndex = 0;

// 打开图片模态框
function openImageModal(imageSrc, galleryId) {
    // 检查项目模态框是否打开，如果是则暂时隐藏（不关闭）
    const projectModal = document.getElementById('projectModal');
    if (projectModal && projectModal.classList.contains('show')) {
        projectModal.style.display = 'none';
        projectModalHidden = true;
    } else {
        projectModalHidden = false;
    }
    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // 设置当前图库
    currentGallery = galleryId;
    
    // 找到当前图片在图库中的索引
    if (imageGalleries[galleryId]) {
        currentImageIndex = imageGalleries[galleryId].indexOf(imageSrc);
        if (currentImageIndex === -1) currentImageIndex = 0;
    }
    
    // 显示图片
    modalImage.src = imageSrc;
    
    // 更新计数器
    updateImageCounter();
    
    // 显示模态框
    modal.classList.add('show');
    
    // 禁止页面滚动
    document.body.style.overflow = 'hidden';
}

// 关闭图片模态框
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // 隐藏模态框
    modal.classList.remove('show');
    
    // 清空图片
    modalImage.src = '';
    
    // 如果项目弹窗之前被隐藏了，恢复显示
    if (projectModalHidden) {
        const projectModal = document.getElementById('projectModal');
        if (projectModal) {
            projectModal.style.display = 'flex';
        }
        projectModalHidden = false;
    } else {
        // 恢复页面滚动（只有在没有恢复项目弹窗时才恢复滚动）
        document.body.style.overflow = '';
    }
}

// 导航到上一张或下一张图片
function navigateImage(direction) {
    if (!currentGallery || !imageGalleries[currentGallery]) return;
    
    const gallery = imageGalleries[currentGallery];
    currentImageIndex += direction;
    
    // 循环浏览
    if (currentImageIndex < 0) {
        currentImageIndex = gallery.length - 1;
    } else if (currentImageIndex >= gallery.length) {
        currentImageIndex = 0;
    }
    
    // 更新图片
    const modalImage = document.getElementById('modalImage');
    modalImage.src = gallery[currentImageIndex];
    
    // 更新计数器
    updateImageCounter();
}

// 更新图片计数器
function updateImageCounter() {
    const counter = document.getElementById('imageCounter');
    if (currentGallery && imageGalleries[currentGallery]) {
        const gallery = imageGalleries[currentGallery];
        counter.textContent = `${currentImageIndex + 1} / ${gallery.length}`;
    }
}

// 点击模态框背景关闭
const imageModal = document.getElementById('imageModal');
if (imageModal) {
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeImageModal();
        }
    });
}

// 键盘导航
document.addEventListener('keydown', function(e) {
    const imageModal = document.getElementById('imageModal');
    if (imageModal && imageModal.classList.contains('show')) {
        if (e.key === 'ArrowLeft') {
            navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
            navigateImage(1);
        }
    }
});

// ==========================================
// 确保 DOM 加载完成后初始化
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // 确认所有模态框元素存在
    const projectModal = document.getElementById('projectModal');
    const videoModal = document.getElementById('videoModal');
    const imageModal = document.getElementById('imageModal');
    
    if (!projectModal) {
        console.error('项目模态框元素未找到！');
    }
    if (!videoModal) {
        console.error('视频模态框元素未找到！');
    }
    if (!imageModal) {
        console.error('图片模态框元素未找到！');
    }
    
    console.log('✅ 所有模态框初始化完成');
});

