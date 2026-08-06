<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="content">
        <div class="icon">☕</div>
        <h1>The Coffee Shop</h1>
        <p class="tagline">Freshly brewed coffee made with passion.</p>
        <a href="#about" class="button">Discover Our Story</a>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="about">
      <div class="card">
        <span class="section-label">Our Story</span>
        <h2>About Us</h2>
        <p>
          Welcome to The Coffee Shop — where we serve handcrafted coffee made from premium beans
          roasted to perfection. Whether you're looking for your morning espresso or a relaxing
          afternoon latte, we've got you covered.
        </p>
      </div>

      <div class="features">
        <div class="item">
          <span class="icon">🌱</span>
          <h3>Ethically Sourced</h3>
          <p>Beans selected from sustainable farms around the world.</p>
        </div>
        <div class="item">
          <span class="icon">🔥</span>
          <h3>House Roasted</h3>
          <p>Small-batch roasting for peak freshness and flavour.</p>
        </div>
        <div class="item">
          <span class="icon">❤️</span>
          <h3>Made with Love</h3>
          <p>Every cup crafted by baristas who truly care.</p>
        </div>
      </div>
    </section>

    <!-- Visit Us -->
    <section class="contact">
      <span class="section-label">Find Us</span>
      <h2>Visit Us</h2>
      <div class="contact-grid">
        <div class="item">
          <span class="icon">📍</span>
          <div>
            <strong>Location</strong>
            <p>123 Coffee Street</p>
          </div>
        </div>
        <div class="item">
          <span class="icon">📞</span>
          <div>
            <strong>Phone</strong>
            <p>(248) 434-5508</p>
          </div>
        </div>
        <div class="item">
          <span class="icon">🕒</span>
          <div>
            <strong>Hours</strong>
            <p>Open Daily: 7 AM – 8 PM</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.section-label {
  @apply text-xs font-semibold tracking-widest uppercase;
  color: #9c5a2a;
}

.hero {
  background: linear-gradient(135deg, #3b1f0a 0%, #6b3a1f 50%, #9c5a2a 100%);
  @apply flex items-center justify-center text-center py-32 px-6;
}
.hero .content {
  @apply flex flex-col items-center gap-5 max-w-xl;
}
.hero h1 {
  @apply text-5xl font-bold text-white tracking-tight;
}
.hero .content .icon {
  @apply text-7xl;
}

.tagline {
  @apply text-lg text-amber-200 max-w-sm;
}
.button {
  @apply mt-2 px-7 py-3 rounded-full font-semibold text-sm tracking-wide;
  background: #f5c87a;
  color: #3b1f0a;
}
.button:hover {
  background: #f9d89a;
}

.about {
  @apply max-w-4xl mx-auto px-6 py-24 flex flex-col gap-16;
}
.about .card {
  @apply flex flex-col gap-4;
}
.about .card h2 {
  @apply text-3xl font-bold;
}
.about .card p {
  @apply text-base leading-relaxed;
  color: #57606a;
  max-width: 60ch;
}
.features {
  @apply grid grid-cols-1 gap-8;
}
@media (min-width: 640px) {
  .features {
    grid-template-columns: repeat(3, 1fr);
  }
}
.features .item {
  @apply flex flex-col gap-2 p-6 rounded-2xl border;
  border-color: #e5e7eb;
  background: #f7f8fa;
}
.item .icon {
  @apply text-3xl;
}
.item h3 {
  @apply font-semibold text-base;
}
.item p {
  @apply text-sm leading-relaxed;
  color: #57606a;
}

.contact {
  @apply px-6 py-24;
  background: #f7f8fa;
  border-top: 1px solid #e5e7eb;
}
.contact > h2 {
  @apply text-3xl font-bold max-w-4xl mx-auto mb-10;
}
.contact-grid {
  @apply max-w-4xl mx-auto grid grid-cols-1 gap-6;
}
@media (min-width: 640px) {
  .contact-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.contact-grid .item {
  @apply flex items-start gap-4 p-6 rounded-2xl border bg-white;
  border-color: #e5e7eb;
}
.contact-grid .item .icon {
  @apply text-2xl mt-0.5;
}
.contact-grid .item strong {
  @apply block text-sm font-semibold mb-0.5;
}
.contact-grid .item p {
  @apply text-sm;
  color: #57606a;
}
</style>
