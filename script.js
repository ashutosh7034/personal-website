const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');
const backToTop = document.querySelector('.back-to-top');
const loadingScreen = document.getElementById('loading-screen');
let navIndicator = null;

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (window.scrollY > 300) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinkItems.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

if (window.gsap) {
  gsap.registerPlugin(window.ScrollTrigger || {});
}

function initNavIndicator() {
  if (!window.gsap || !navLinks || !navLinkItems.length) {
    return;
  }

  navIndicator = document.createElement('span');
  navIndicator.className = 'nav-indicator';
  navLinks.appendChild(navIndicator);

  const moveIndicator = (target) => {
    const navRect = navLinks.getBoundingClientRect();
    const linkRect = target.getBoundingClientRect();
    gsap.to(navIndicator, {
      x: linkRect.left - navRect.left,
      width: linkRect.width,
      duration: 0.35,
      ease: 'power2.out'
    });
  };

  navLinkItems.forEach((link) => {
    link.addEventListener('mouseenter', () => moveIndicator(link));
  });

  navLinks.addEventListener('mouseleave', () => {
    const active = document.querySelector('.nav-links a.active-link');
    if (active) {
      moveIndicator(active);
    }
  });

  const setActiveLink = () => {
    let active = navLinkItems[0];
    navLinkItems.forEach((link) => {
      const section = document.querySelector(link.getAttribute('href'));
      if (!section) {
        return;
      }
      const top = section.offsetTop - 120;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        active = link;
      }
    });

    navLinkItems.forEach((link) => link.classList.remove('active-link'));
    active.classList.add('active-link');
    moveIndicator(active);
  };

  window.addEventListener('scroll', setActiveLink);
  window.addEventListener('resize', setActiveLink);
  setActiveLink();
}

function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const follower = document.getElementById('cursor-follower');

  if (!dot || !follower || window.innerWidth < 768) {
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    requestAnimationFrame(animateFollower);
  }

  animateFollower();
}

function initTimelineReveal() {
  const cards = document.querySelectorAll('.timeline-card');
  if (!cards.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const allVisible = [...cards].filter((card) => card.getBoundingClientRect().top < window.innerHeight);
          const index = allVisible.indexOf(entry.target);
          const delay = Math.max(0, index) * 200;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
}

function init3DStatTilt() {
  const cards = document.querySelectorAll('.floating-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 14;
      const rotateX = ((0.5 - y / rect.height)) * 14;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      card.style.boxShadow = '0 0 24px rgba(127, 119, 221, 0.4)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
}

function initProjectTilt() {
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.3
    });
  }
}

function initHeroThree() {
  const mount = document.getElementById('hero-3d-bg');
  if (!mount || window.innerWidth < 768 || !window.THREE) {
    return;
  }

  let isRunning = true;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
  camera.position.z = 45;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  mount.appendChild(renderer.domElement);

  const particleCount = 2200;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 140;
    positions[i + 1] = (Math.random() - 0.5) * 90;
    positions[i + 2] = (Math.random() - 0.5) * 90;
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.35,
    color: '#7f77dd',
    transparent: true,
    opacity: 0.85
  });

  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  const shapeGeometry = new THREE.TorusKnotGeometry(4, 1.2, 120, 16);
  const shapeMaterial = new THREE.MeshStandardMaterial({
    color: '#378add',
    roughness: 0.2,
    metalness: 0.6,
    emissive: '#202040'
  });
  const shape = new THREE.Mesh(shapeGeometry, shapeMaterial);
  shape.position.set(20, 6, 0);
  scene.add(shape);

  const light1 = new THREE.PointLight('#7f77dd', 1.2, 200);
  light1.position.set(30, 20, 30);
  scene.add(light1);

  const light2 = new THREE.PointLight('#378add', 0.8, 180);
  light2.position.set(-30, -20, 20);
  scene.add(light2);

  const mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  function animate() {
    if (!isRunning) {
      return;
    }

    particles.rotation.y += 0.0008;
    particles.rotation.x += 0.0003;

    shape.rotation.x += 0.005;
    shape.rotation.y += 0.007;
    shape.position.x += (17 + mouse.x * 6 - shape.position.x) * 0.04;
    shape.position.y += (4 + mouse.y * 4 - shape.position.y) * 0.04;

    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = mount.clientWidth / mount.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
    } else if (!isRunning) {
      isRunning = true;
      animate();
    }
  });
}

function startUI() {
  initNavIndicator();
  initCustomCursor();
  initTimelineReveal();
  init3DStatTilt();
  initProjectTilt();

  if (window.gsap) {
    gsap.from('.hero-text > *', {
      y: 28,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });

    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 70%'
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12
    });

    gsap.from('.skill-orb', {
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 72%'
      },
      y: 34,
      opacity: 0,
      scale: 0.92,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out'
    });
  }
}

window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 2000);

  startUI();

  setTimeout(() => {
    initHeroThree();
  }, 150);
});
