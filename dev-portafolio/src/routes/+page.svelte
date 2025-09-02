<script>
  import { AboutMeSection, HeroSection, MyWorkSection } from "$components";

  let { data } = $props();

  let { workExperience, projects } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
