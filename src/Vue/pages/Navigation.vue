<template>
<div role="tablist">
  <cv-header aria-label="Carbon header">
    <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" />
    <cv-skip-to-content href="#about">
      Skip to content
    </cv-skip-to-content>
    
    <cv-header-name href="#" prefix="IBM">
      &nbsp;[Automation Team Portfolio]
    </cv-header-name>

    <cv-header-nav aria-label="Carbon nav" class="navi">
      <cv-header-menu-item href="#about">
        About us
      </cv-header-menu-item>
      <cv-header-menu-item href="#projects">
        Projects
      </cv-header-menu-item>
      <cv-header-menu-item href="#contact">
        Contact us
      </cv-header-menu-item>
      <cv-header-menu-item href="#" class="home-icon" active>
          <i class="fa fa-home"></i>
      </cv-header-menu-item>
    </cv-header-nav>

    <cv-side-nav id="side-nav" fixed>
    <cv-side-nav-items>
      <cv-header-side-nav-items>

        <cv-header-menu-item href="#about">
          About us
        </cv-header-menu-item>
        <cv-header-menu-item href="#projects">
          Projects
        </cv-header-menu-item>
        <cv-header-menu-item href="#contact">
          Contact us
        </cv-header-menu-item>
        

    </cv-header-side-nav-items>
    </cv-side-nav-items>
  </cv-side-nav>
    <template v-slot:right-panels v-if="areRightPanels"></template>

  </cv-header> 
</div>
</template>

