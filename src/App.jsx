import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  ArrowLeft,
  Aperture,
  Bot,
  Camera,
  Check,
  Mail,
  MessageCircle,
  Sparkles,
  SquareStack,
} from 'lucide-react';
import BorderGlow from './components/BorderGlow.jsx';
import Grainient from './components/Grainient.jsx';
import LogoLoop from './components/LogoLoop.jsx';
import TiltedCard from './components/TiltedCard.jsx';
import operationImage from './assets/hero-modules/operation.png';
import graphicDesignImage from './assets/hero-modules/graphic-design.png';
import aiPortraitImage from './assets/hero-modules/ai-portrait.png';
import desktopRobotImage from './assets/hero-modules/desktop-robot.png';
import aicgImage from './assets/hero-modules/aicg.png';
import personalPhotoImage from './assets/hero-modules/personal-photo.png';
import weddingImage from './assets/hero-modules/wedding.png';
import visualSystemBg from './assets/strength-bg/visual-system.png';
import aiDesignBg from './assets/strength-bg/ai-design.png';
import commercialPhotoBg from './assets/strength-bg/commercial-photo.png';
import contentOperationBg from './assets/strength-bg/content-operation.png';
import heroBackgroundImage from './assets/hero-background/sunset-island.png';

gsap.registerPlugin(ScrollTrigger);

const workImageModules = import.meta.glob('./assets/work-gallery/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const getWorkImages = (slug) =>
  Object.entries(workImageModules)
    .filter(([path]) => path.includes(`/work-gallery/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);

const workSets = {
  operation: getWorkImages('operation'),
  graphic: getWorkImages('graphic-design'),
  portrait: getWorkImages('ai-portrait'),
  robot: getWorkImages('desktop-robot'),
  aicg: getWorkImages('aicg'),
  photo: getWorkImages('personal-photo'),
  wedding: getWorkImages('wedding'),
};

const coverImage = (key, fallback) => workSets[key]?.[0] ?? fallback;

const navItems = ['经历', '项目', '优势', '联系'];

const stats = [
  { value: '7+', label: '年视觉与内容经验' },
  { value: '120+', label: '商业项目交付' },
  { value: '38%', label: '平均内容效率提升' },
  { value: '4', label: '核心服务方向' },
];

const projects = [
  {
    tag: 'Brand Identity',
    title: '品牌与平面视觉系统',
    desc: '把真实项目图、版式语言和品牌物料统一成更稳定的视觉表达，让内容在不同场景里保持识别度。',
    meta: '品牌策略 / 平面设计 / 视觉延展',
    image: coverImage('graphic', graphicDesignImage),
  },
  {
    tag: 'AI Design',
    title: 'AI写真与AICG内容',
    desc: '结合用户需求与私人定制，把人物风格、场景想象和生成式视觉延展为可发布的内容资产。',
    meta: 'AI写真 / AICG / 视觉生成',
    image: coverImage('portrait', aiPortraitImage),
  },
  {
    tag: 'Photography',
    title: '摄影与内容代运营',
    desc: '用真实影像建立人物、产品与账号内容的质感，再通过运营节奏让内容持续被看见。',
    meta: '个人摄影 / 婚礼跟拍 / 内容运营',
    image: coverImage('photo', personalPhotoImage),
  },
];

const strengths = [
  {
    icon: Aperture,
    title: '视觉系统搭建',
    text: '从品牌气质、版式秩序到内容模板，建立一套可长期复用的视觉语言，让每一次露出都保持统一、清晰、有辨识度。',
    background: visualSystemBg,
  },
  {
    icon: Bot,
    title: 'AI设计',
    text: '结合用户需求，私人定制，发挥想象力。无限的想象产生无限的内容，把灵感快速延展成可落地的视觉方案。',
    background: aiDesignBg,
  },
  {
    icon: Camera,
    title: '商业摄影表达',
    text: '从拍摄企划、现场布光到后期调性控制，用影像建立产品质感与人物情绪，让照片真正服务于品牌定位。',
    background: commercialPhotoBg,
  },
  {
    icon: SquareStack,
    title: '内容代运营',
    text: '围绕账号定位、选题节奏、视觉模板与数据复盘，搭建稳定的内容生产机制，让账号持续输出、持续被看见。',
    background: contentOperationBg,
  },
];

const heroShowcase = [
  { title: '代运营', label: 'OPERATION', tone: 'operation', image: operationImage },
  { title: '平面设计', label: 'GRAPHIC DESIGN', tone: 'graphic', image: graphicDesignImage },
  { title: 'AI写真', label: 'AI PORTRAIT', tone: 'portrait', image: aiPortraitImage },
  { title: '桌宠机器人', label: 'DESKTOP ROBOT', tone: 'robot', image: desktopRobotImage },
  { title: 'AICG', label: 'AICG', tone: 'aicg', image: aicgImage },
  { title: '个人摄影', label: 'PERSONAL PHOTO', tone: 'photo', image: personalPhotoImage },
  { title: '婚礼跟拍', label: 'WEDDING FILM', tone: 'wedding', image: weddingImage },
];

const serviceGalleries = [
  {
    id: 'service-operation',
    title: '代运营',
    eyebrow: 'Social Operation',
    image: coverImage('operation', operationImage),
    photos: workSets.operation,
    items: ['账号定位', '内容节奏', '视觉模板'],
  },
  {
    id: 'service-graphic-design',
    title: '平面设计',
    eyebrow: 'Graphic Design',
    image: coverImage('graphic', graphicDesignImage),
    photos: workSets.graphic,
    items: ['品牌物料', '海报设计', '版式系统'],
  },
  {
    id: 'service-ai-portrait',
    title: 'AI写真',
    eyebrow: 'AI Portrait',
    image: coverImage('portrait', aiPortraitImage),
    photos: workSets.portrait,
    items: ['形象设定', '风格生成', '精修合成'],
  },
  {
    id: 'service-desktop-robot',
    title: '桌宠机器人',
    eyebrow: 'Desktop Robot',
    image: coverImage('robot', desktopRobotImage),
    photos: workSets.robot,
    items: ['产品设定', '交互视觉', '内容人格'],
  },
  {
    id: 'service-aicg',
    title: 'AICG',
    eyebrow: 'Generative Visual',
    image: coverImage('aicg', aicgImage),
    photos: workSets.aicg,
    items: ['概念探索', '场景图像', '批量内容'],
  },
  {
    id: 'service-personal-photo',
    title: '个人摄影',
    eyebrow: 'Personal Photography',
    image: coverImage('photo', personalPhotoImage),
    photos: workSets.photo,
    items: ['肖像企划', '拍摄执行', '影像后期'],
  },
  {
    id: 'service-wedding',
    title: '婚礼跟拍',
    eyebrow: 'Wedding Documentary',
    image: coverImage('wedding', weddingImage),
    photos: workSets.wedding,
    items: ['纪实跟拍', '情绪捕捉', '成片交付'],
  },
];

function App() {
  const shellRef = useRef(null);
  const [isNavPinned, setIsNavPinned] = useState(false);

  useEffect(() => {
    const updateCursor = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updateCursor);
    return () => window.removeEventListener('pointermove', updateCursor);
  }, []);

  useEffect(() => {
    const updateNavState = () => {
      const hero = document.querySelector('.hero');
      const triggerPoint = hero ? hero.offsetHeight - 96 : window.innerHeight - 96;
      setIsNavPinned(window.scrollY >= triggerPoint);
    };

    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState);

    return () => {
      window.removeEventListener('scroll', updateNavState);
      window.removeEventListener('resize', updateNavState);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !shellRef.current) return undefined;

    const originalOverflow = document.body.style.overflow;

    const context = gsap.context(() => {
      document.body.style.overflow = 'hidden';

      gsap.set('.opening-screen', { autoAlpha: 1 });
      gsap.set('.opening-panel-top', { scaleY: 1, transformOrigin: 'top center' });
      gsap.set('.opening-panel-bottom', { scaleY: 1, transformOrigin: 'bottom center' });
      gsap.set('.opening-word', { y: 54, autoAlpha: 0 });
      gsap.set('.hero-video', {
        scale: 1.18,
        filter: 'saturate(0.78) contrast(1.1) brightness(0.58)',
      });
      gsap.set('.nav', { y: -110, autoAlpha: 0 });
      gsap.set('.hero .eyebrow', {
        y: 42,
        autoAlpha: 0,
        clipPath: 'inset(0 0 100% 0)',
      });
      gsap.set('.hero h1 span', {
        yPercent: 128,
        scaleY: 0.62,
        autoAlpha: 0,
        clipPath: 'inset(0 0 100% 0)',
        transformOrigin: 'left bottom',
      });
      gsap.set('.hero-subcopy, .hero-back', { y: 42, autoAlpha: 0 });
      gsap.set('.hero-script', { x: -24, autoAlpha: 0, rotate: -4 });
      gsap.set('.hero-showcase', { y: 96, autoAlpha: 0 });
      gsap.set('.hero-showcase-card', {
        y: 112,
        autoAlpha: 0,
        scale: 0.9,
        clipPath: 'inset(0 0 100% 0)',
        transformOrigin: '50% 100%',
      });

      const opening = gsap.timeline({
        defaults: { ease: 'expo.out' },
        onComplete: () => {
          document.body.style.overflow = originalOverflow;
          gsap.set('.opening-screen', { display: 'none' });
          gsap.set('.nav', { clearProps: 'transform' });
          ScrollTrigger.refresh();
        },
      });

      opening
        .to('.opening-word', { y: 0, autoAlpha: 1, duration: 0.9 })
        .to('.opening-word', { y: -34, autoAlpha: 0, duration: 0.58, ease: 'power3.in' }, '+=0.14')
        .to('.opening-panel-top', { scaleY: 0, duration: 1.25, ease: 'expo.inOut' }, '-=0.1')
        .to('.opening-panel-bottom', { scaleY: 0, duration: 1.25, ease: 'expo.inOut' }, '<0.08')
        .to(
          '.hero-video',
          {
            scale: 1,
            filter: 'saturate(1.12) contrast(1.04) brightness(0.86)',
            duration: 2.15,
            ease: 'power3.out',
          },
          '-=1.05',
        )
        .to('.nav', { y: 0, autoAlpha: 1, duration: 1.05 }, '-=1.48')
        .to(
          '.hero .eyebrow',
          {
            y: 0,
            autoAlpha: 1,
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.05,
          },
          '-=0.92',
        )
        .to(
          '.hero h1 span',
          {
            yPercent: 0,
            scaleY: 1,
            autoAlpha: 1,
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.38,
            stagger: 0.16,
          },
          '-=0.62',
        )
        .to('.hero-script', { x: 0, autoAlpha: 1, rotate: 0, duration: 0.95, ease: 'power4.out' }, '-=0.98')
        .to('.hero-subcopy', { y: 0, autoAlpha: 1, duration: 1.0, ease: 'power4.out' }, '-=0.72')
        .to('.hero-back', { y: 0, autoAlpha: 1, duration: 0.78, ease: 'power4.out' }, '-=1.1')
        .to(
          '.hero-showcase-card',
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.05,
            stagger: 0.08,
            ease: 'expo.out',
          },
          '-=0.76',
        )
        .to('.hero-showcase', { y: 0, autoAlpha: 1, duration: 0.9, ease: 'power4.out' }, '-=1.05');

      const revealSections = gsap.utils.toArray('.section-animate');
      revealSections.forEach((section) => {
        const giant = section.querySelector('.section-giant');
        const kicker = section.querySelector('.section-kicker');
        const heading = section.querySelector('h2');
        const copy = section.querySelectorAll('.section-heading p, .experience-copy p, .contact-finale p');
        const cards = section.querySelectorAll(
          '.service-gallery-card, .project-card, .strength-card, .stat-card, .portrait-panel, .contact-strip a, .contact-strip span, .finale-actions a',
        );
        const visuals = section.querySelectorAll('.service-gallery-image, .project-visual');

        gsap.set(giant, {
          x: -180,
          scale: 1.22,
          autoAlpha: 0,
          clipPath: 'inset(0 100% 0 0)',
          transformOrigin: 'left center',
        });
        gsap.set(kicker, {
          y: 128,
          scale: 1.32,
          autoAlpha: 0,
          clipPath: 'inset(0 0 100% 0)',
          transformOrigin: 'left center',
        });
        gsap.set(heading, {
          y: 82,
          autoAlpha: 0,
          clipPath: 'inset(0 0 100% 0)',
        });
        gsap.set(copy, { y: 58, autoAlpha: 0 });
        gsap.set(cards, {
          y: 132,
          autoAlpha: 0,
          rotateX: -8,
          clipPath: 'inset(18% 0 0 0)',
          transformOrigin: '50% 100%',
        });
        gsap.set(visuals, {
          clipPath: 'inset(0 100% 0 0)',
          scale: 1.1,
          transformOrigin: 'left center',
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 74%',
            once: true,
          },
          defaults: { ease: 'power4.out' },
        });

        timeline
          .to(giant, {
            x: 0,
            scale: 1,
            autoAlpha: 1,
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.18,
            ease: 'expo.out',
          })
          .to(kicker, {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.0,
          }, '-=0.68')
          .to(
            heading,
            {
              y: 0,
              autoAlpha: 1,
              clipPath: 'inset(0 0 0% 0)',
              duration: 1.05,
            },
            '-=0.52',
          )
          .to(copy, { y: 0, autoAlpha: 1, duration: 0.92, stagger: 0.08 }, '-=0.62')
          .to(
            cards,
            {
              y: 0,
              rotateX: 0,
              autoAlpha: 1,
              clipPath: 'inset(0% 0 0 0)',
              duration: 1.14,
              stagger: 0.14,
            },
            '-=0.46',
          )
          .to(
            visuals,
            {
              clipPath: 'inset(0 0% 0 0)',
              scale: 1,
              duration: 1.28,
              stagger: 0.13,
              ease: 'expo.out',
            },
            '-=1.0',
          )
          .set(cards, { clearProps: 'transform,clipPath' })
          .set(visuals, { clearProps: 'clipPath,scale' });
      });

      gsap.utils.toArray('.service-gallery-image img, .project-visual').forEach((visual) => {
        gsap.to(visual, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: visual,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.15,
          },
        });
      });

      gsap.to('.portrait-card', {
        y: -34,
        ease: 'none',
        scrollTrigger: {
          trigger: '.experience',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, shellRef);

    return () => {
      document.body.style.overflow = originalOverflow;
      context.revert();
    };
  }, []);

  const handleSurfaceMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.dataset.hover = 'true';
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  const handleSurfaceLeave = (event) => {
    event.currentTarget.dataset.hover = 'false';
  };

  return (
    <main className="site-shell" ref={shellRef}>
      <div className="opening-screen" aria-hidden="true">
        <div className="opening-panel opening-panel-top" />
        <div className="opening-panel opening-panel-bottom" />
        <div className="opening-word">GOOD MORNING STUDIO</div>
      </div>
      <div className="site-grainient" aria-hidden="true">
        <Grainient
          color1="#b85e0f"
          color2="#b3dd72"
          color3="#2b2626"
          timeSpeed={1.2}
          colorBalance={-0.43}
          warpStrength={1}
          warpFrequency={5.7}
          warpSpeed={5.4}
          warpAmplitude={50}
          blendAngle={13}
          blendSoftness={1}
          rotationAmount={480}
          noiseScale={0.9}
          grainAmount={0.01}
          grainScale={2}
          grainAnimated
          contrast={1.15}
          gamma={0.9}
          saturation={1.65}
          centerX={-0.1}
          centerY={-0.35}
          zoom={1.2}
        />
      </div>
      <section className="hero" id="home">
        <div className="hero-video hero-cloudscape" style={{ '--hero-bg-image': `url(${heroBackgroundImage})` }} aria-hidden="true" />
        <div className="hero-shade" />
        <a className="hero-back" href="#home" aria-label="返回顶部">
          <ArrowLeft size={22} />
        </a>
        <nav className={`nav ${isNavPinned ? 'nav-pinned' : ''}`}>
          <a className="brand" href="#home" aria-label="返回首页">
            <span className="brand-mark">GM</span>
            <span>古德莫宁工作室</span>
          </a>
          <div className="nav-links" aria-label="页面导航">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`}>
                {item}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#联系">
            <MessageCircle size={17} />
            联系合作
          </a>
        </nav>

        <div className="hero-inner">
          <p className="eyebrow">Visual System / AI Workflow / Photography</p>
          <h1>
            <span className="hero-title-main">GOOD MORNING</span>
            <span className="hero-title-sub">
              PORTFOLIO
              <em className="hero-script">goodmorning</em>
            </span>
          </h1>
          <p className="hero-subcopy">
            用视觉系统与 AI 工作流，让品牌内容更快、更准、更有辨识度。
          </p>
        </div>

        <div className="hero-showcase" aria-label="作品预览循环">
          <LogoLoop
            logos={heroShowcase}
            speed={46}
            direction="left"
            logoHeight={168}
            gap={22}
            hoverSpeed={12}
            scaleOnHover
            fadeOut
            fadeOutColor="#050607"
            ariaLabel="作品预览循环"
            className="hero-showcase-loop"
            renderItem={(item) => (
              <div className={`hero-showcase-card module-${item.tone}`} aria-label={`${item.title}作品预览`}>
                <img src={item.image} alt="" loading="lazy" decoding="async" />
                <span>{item.label}</span>
                <strong>{item.title}</strong>
              </div>
            )}
          />
        </div>
      </section>

      <section className="section service-gallery section-animate" id="服务图库">
        <div className="section-giant" aria-hidden="true">Service Gallery</div>
        <div className="section-heading">
          <div>
            <div className="section-kicker">01 / Service Gallery</div>
            <h2>模块图库</h2>
          </div>
          <p>已接入真实作品图；缺少素材的方向先使用生成图补齐，后续可以继续替换成正式项目照片。</p>
        </div>

        <div className="service-gallery-grid">
          {serviceGalleries.map((service) => (
            <TiltedCard
              className="service-tilt"
              captionText={service.title}
              rotateAmplitude={8}
              scaleOnHover={1.035}
              showTooltip
              key={service.id}
            >
              <article className="service-gallery-card hover-surface" id={service.id}>
                <div className="service-gallery-image">
                  <img src={service.image} alt={`${service.title}模块图`} loading="lazy" decoding="async" />
                </div>
                <div className="service-gallery-content">
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <div className="service-photo-strip" aria-label={`${service.title}作品缩略图`}>
                    {(service.photos?.slice(1, 4) ?? []).map((photo, index) => (
                      <div className="service-photo-slot" key={photo}>
                        <img src={photo} alt={`${service.title}作品 ${index + 1}`} loading="lazy" decoding="async" />
                      </div>
                    ))}
                  </div>
                  <div className="service-tags">
                    {service.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            </TiltedCard>
          ))}
        </div>
      </section>

      <section className="section experience section-animate" id="经历">
        <div className="section-giant" aria-hidden="true">Studio Profile</div>
        <div className="section-kicker">01 / Studio Profile</div>
        <div className="experience-grid">
          <div
            className="portrait-panel hover-surface"
            onPointerMove={handleSurfaceMove}
            onPointerLeave={handleSurfaceLeave}
            aria-label="个人形象视觉"
          >
            <div className="portrait-orbit" />
            <div className="portrait-card">
              <div className="portrait-head" />
              <div className="portrait-body" />
              <div className="portrait-line one" />
              <div className="portrait-line two" />
            </div>
            <div className="portrait-caption">
              <Sparkles size={18} />
              Visual Designer / AI Designer / Photographer
            </div>
          </div>

          <div className="experience-copy">
            <h2>一个更像长期合伙人的私人创意工作室。</h2>
            <p>
              我关注的不只是“好看”，而是视觉如何服务于商业目标：让品牌被记住，让内容更稳定地被生产，
              让每一次拍摄、设计和运营动作都能回到同一套清晰的表达系统。
            </p>
            <p>
              服务范围覆盖视觉设计、AI辅助设计、商业摄影与内容代运营。适合正在启动品牌、
              需要升级视觉体系，或希望建立高效率内容生产流程的团队与个人。
            </p>

            <div className="contact-strip">
              <a href="mailto:hello@goodmorning.studio">hello@goodmorning.studio</a>
              <span>微信 / WeChat: GoodMorningStudio</span>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <TiltedCard
                  className="stat-tilt"
                  captionText={stat.label}
                  rotateAmplitude={6}
                  scaleOnHover={1.04}
                  key={stat.label}
                >
                  <div
                    className="stat-card hover-surface"
                    onPointerMove={handleSurfaceMove}
                    onPointerLeave={handleSurfaceLeave}
                  >
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </TiltedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section projects section-animate" id="项目">
        <div className="section-giant" aria-hidden="true">Selected Works</div>
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 / Selected Works</div>
            <h2>精选项目</h2>
          </div>
          <p>从真实作品与补位生成图中抽取代表案例，形成更接近作品集浏览体验的大卡片展示。</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <TiltedCard
              className="project-tilt"
              captionText={project.title}
              rotateAmplitude={6}
              scaleOnHover={1.025}
              showTooltip
              key={project.title}
            >
              <BorderGlow
                className="project-card"
                edgeSensitivity={12}
                glowColor="174 70 74"
                backgroundColor="rgba(10, 13, 13, 0.78)"
                borderRadius={8}
                glowRadius={48}
                glowIntensity={1.9}
                coneSpread={28}
                fillOpacity={0.22}
                animated={index === 0}
                colors={['#9dded2', '#c4b17b', '#2a6c63']}
              >
                <div className="project-visual">
                  <img src={project.image} alt={`${project.title}视觉`} loading="lazy" decoding="async" />
                  <span>0{index + 1}</span>
                </div>
                <div className="project-content">
                  <div className="project-tag">{project.tag}</div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-meta">
                    <span>{project.meta}</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </BorderGlow>
            </TiltedCard>
          ))}
        </div>
      </section>

      <section className="section strengths section-animate" id="优势">
        <div className="section-giant" aria-hidden="true">Capability</div>
        <div className="section-heading">
          <div>
            <div className="section-kicker">03 / Capability</div>
            <h2>个人优势</h2>
          </div>
          <p>四个能力模块组成工作室的核心交付结构，从策略、视觉到内容运营保持一致。</p>
        </div>

        <div className="strength-grid">
          {strengths.map(({ icon: Icon, title, text, background }) => (
            <TiltedCard
              className="strength-tilt"
              captionText={title}
              rotateAmplitude={7}
              scaleOnHover={1.035}
              showTooltip
              key={title}
            >
              <BorderGlow
                className="strength-card"
                edgeSensitivity={14}
                glowColor="44 72 72"
                backgroundColor="rgba(12, 14, 14, 0.74)"
                borderRadius={8}
                glowRadius={38}
                glowIntensity={1.55}
                coneSpread={26}
                fillOpacity={0.18}
                colors={['#c4b17b', '#9dded2', '#4d8f83']}
                style={{ '--strength-bg': `url(${background})` }}
              >
                <div className="icon-box">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="strength-check">
                  <Check size={16} />
                  可模块化合作
                </div>
              </BorderGlow>
            </TiltedCard>
          ))}
        </div>
      </section>

      <section className="contact-finale section-animate" id="联系">
        <div className="section-giant contact-giant" aria-hidden="true">Contact</div>
        <div className="finale-inner">
          <div className="section-kicker">04 / Contact</div>
          <h2>把下一次合作，做成一个清晰、漂亮、有效的视觉系统。</h2>
          <p>
            欢迎发送项目背景、当前阶段、预算范围与期望交付时间。我会先判断最适合你的合作方式，
            再给出清晰的执行路径。
          </p>
          <div className="finale-actions">
            <a className="primary-button interactive-link" href="mailto:hello@goodmorning.studio">
              <Mail size={18} />
              发起邮件
            </a>
            <a className="secondary-button interactive-link" href="tel:+8613800000000">
              <MessageCircle size={18} />
              +86 138 0000 0000
            </a>
          </div>
        </div>
        <footer>
          <span>GOOD MORNING STUDIO</span>
          <span>Visual Design / AI Design / Photography / Operation</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
