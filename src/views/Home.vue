<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import HeroSection from "../components/HeroSection.vue";
import Solution from "../components/Solution.vue";
import Plateforme from "../components/Plateforme.vue";
import SolutionProfil from "../components/SolutionProfil.vue";
import PourquoiChoisir from "../components/PourquoiChoisir.vue";
import Traction from "../components/Traction.vue";
import Testimonial from "../components/Testimonial.vue";
import Footer from "../components/Footer.vue";
import CTASection from "../components/CTASection.vue";
</script>

<template>
  <Navbar />
  <section id="accueil">
    <HeroSection />
  </section>
  <section id="solution">
    <Solution />
  </section>
  <section id="nos-services">
    <Plateforme />
  </section>
  <SolutionProfil />
  <section id="qui-sommes-nous">
    <PourquoiChoisir />
  </section>
  <Traction />
  <Testimonial />
  <CTASection />
  <Footer />
</template>

<style scoped></style>
