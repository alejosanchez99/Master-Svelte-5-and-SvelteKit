<script>
  import { AboutMeSection, HeroSection } from "$components";

  let { data } = $props();

  let { workExperience } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience}/>
