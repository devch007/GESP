import re

with open('/Users/devchaudhary/Desktop/GESP/study-abroad/index.html', 'r', errors='ignore') as f:
    text = f.read()

bento_pattern = r'<section class="bento-section">.*?</section>'

new_bento_showcase = '''
<!-- GESP Bento Experience: Student Dimension Showcase -->
<section id="student-dimensions" class="bento-dimension-section">
  <div class="bento-dimension-container">
    <div class="bento-dim-header">
      <div class="bento-dim-badge">
        <span class="w-2 h-2 rounded-full bg-[#FAB900] inline-block"></span>
        Student-First Methodology
      </div>
      <h2 class="bento-dim-title">
        Discover The <span>Student Experience</span>
      </h2>
      <p class="bento-dim-subtitle">
        Finding the right school starts with understanding the student. We match every dimension of who they are.
      </p>
    </div>

    <div class="bento-dim-body">
      <!-- Left Interactive Stack -->
      <div class="bento-cards-stack">
        <!-- Card 1: How They Learn -->
        <div class="dim-interactive-card active" onclick="selectDimension(0)">
          <div class="dim-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          </div>
          <div class="dim-card-info">
            <h3 class="dim-card-title">How They Learn</h3>
            <p class="dim-card-tagline">Academics &amp; Classroom Style</p>
            <p class="dim-card-desc">
              We look at your child's favorite subjects, study habits, and future goals to find schools where teachers give them personal attention.
            </p>
          </div>
        </div>

        <!-- Card 2: Campus Life -->
        <div class="dim-interactive-card" onclick="selectDimension(1)">
          <div class="dim-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
          </div>
          <div class="dim-card-info">
            <h3 class="dim-card-title">Campus Life</h3>
            <p class="dim-card-tagline">Daily Life &amp; Community Feel</p>
            <p class="dim-card-desc">
              Boarding school is a second home. We help pick a friendly, welcoming campus where your child makes friends from around the world and feels safe.
            </p>
          </div>
        </div>

        <!-- Card 3: Sports & Arts -->
        <div class="dim-interactive-card" onclick="selectDimension(2)">
          <div class="dim-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34"></path><path d="M18 4H6v7a6 6 0 0 0 12 0V4Z"></path></svg>
          </div>
          <div class="dim-card-info">
            <h3 class="dim-card-title">Sports &amp; Arts</h3>
            <p class="dim-card-tagline">Coaching, Teams &amp; Passions</p>
            <p class="dim-card-desc">
              Whether your child plays competitive sports or loves music, art, and robotics, we connect you to schools with great facilities and dedicated coaches.
            </p>
          </div>
        </div>

        <!-- Card 4: Family Needs -->
        <div class="dim-interactive-card" onclick="selectDimension(3)">
          <div class="dim-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
          </div>
          <div class="dim-card-info">
            <h3 class="dim-card-title">Family Needs</h3>
            <p class="dim-card-tagline">Location, Safety &amp; Budget</p>
            <p class="dim-card-desc">
              We factor in easy travel routes from India, 24/7 campus care, trusted health and safety support, and your family's budget.
            </p>
          </div>
        </div>
      </div>

      <!-- Right Dynamic Preview Stage -->
      <div class="bento-dim-preview">
        <img id="previewImg" class="bento-dim-preview-img" src="images/campus-aerial.jpg" alt="Campus Overview">
        <div class="bento-dim-preview-overlay"></div>
        <div class="bento-dim-preview-content">
          <div id="previewBadge" class="preview-badge">ACADEMICS &amp; CLASSROOM STYLE</div>
          <h3 id="previewTitle" class="preview-headline">How They Learn</h3>
          <p id="previewDesc" class="preview-description">
            We look at your child's favorite subjects, study habits, and future goals to find schools where teachers give them personal attention.
          </p>
          <a href="#contact" class="inline-flex items-center gap-2 rounded-lg bg-[#FAB900] hover:bg-[#E4B603] text-[#0D2153] font-bold px-7 py-3.5 text-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <span>Discover Your Fit</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  const dimensionsData = [
    {
      title: "How They Learn",
      badge: "ACADEMICS & CLASSROOM STYLE",
      desc: "We look at your child's favorite subjects, study habits, and future goals to find schools where teachers give them personal attention.",
      image: "images/campus-aerial.jpg"
    },
    {
      title: "Campus Life",
      badge: "DAILY LIFE & COMMUNITY FEEL",
      desc: "Boarding school is a second home. We help pick a friendly, welcoming campus where your child makes friends from around the world and feels safe.",
      image: "images/campus-lawn.jpg"
    },
    {
      title: "Sports & Arts",
      badge: "COACHING, TEAMS & PASSIONS",
      desc: "Whether your child plays competitive sports or loves music, art, and robotics, we connect you to schools with great facilities and dedicated coaches.",
      image: "images/student-athlete-soccer.jpg"
    },
    {
      title: "Family Needs",
      badge: "LOCATION, SAFETY & BUDGET",
      desc: "We factor in easy travel routes from India, 24/7 campus care, trusted health and safety support, and your family's budget.",
      image: "images/campus-entrance.jpg"
    }
  ];

  function selectDimension(idx) {
    const cards = document.querySelectorAll('.dim-interactive-card');
    cards.forEach((card, i) => {
      if (i === idx) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    const data = dimensionsData[idx];
    const img = document.getElementById('previewImg');
    const badge = document.getElementById('previewBadge');
    const title = document.getElementById('previewTitle');
    const desc = document.getElementById('previewDesc');

    if (img && data) {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = data.image;
        img.alt = data.title;
        badge.textContent = data.badge;
        title.textContent = data.title;
        desc.textContent = data.desc;
        img.style.opacity = '1';
      }, 200);
    }
  }
</script>
'''

new_html = re.sub(bento_pattern, new_bento_showcase, text, count=1, flags=re.DOTALL)

with open('/Users/devchaudhary/Desktop/GESP/study-abroad/index.html', 'w') as f:
    f.write(new_html)

print('Updated Bento section with exact feature content and images!')
