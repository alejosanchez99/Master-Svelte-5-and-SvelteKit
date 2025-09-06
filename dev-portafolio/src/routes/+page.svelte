<script>
  import { AboutMeSection, HeroSection, MyWorkSection, SkillsSection } from "$components";

  let { data } = $props();

  let { workExperience, projects, skills } = data;

  $inspect(skills);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} /> 
