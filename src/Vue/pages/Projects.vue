<template>

  <section id="projects" class="dark-section">

    <div class="container-fluid">
      <h1 class="section-header">Projects</h1>

      <!-- start of filters  -->

      <div class="row filters">
        <ul class="list-inline mx-auto">
          <li
            v-for="item in filters"
            :key="item.project"
            class="list-inline-item filter"
          >
            <a
              class="nav-item"
              :class="item.filter === currentFilter ? 'active' : null"
              :data-filter="item.filter"
              @click="setFilter"
              >{{ item.filter }}</a
            >
          </li>
        </ul>
      </div>

      <!-- end of filters  -->

      <!-- start of skill container  -->

      <div id="projects-container" class="row">
        <div
          v-for="(item, index) in filteredProjects"
          :key="index"
          class="col-sm-12 col-md-12 flex-col"
        >
          <div class="projects-item">
            <video style="max-width:30%; max-height:auto display:block" controls muted>
                <source :src="require(`./../../assets/videos/${item.video}`)" type="video/mp4">
                Your browser does not support the video tag.
            </video>
          </div>

          <div class="project-description">
            <h2>{{ item.project }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- end of skill container  -->
    </div>

  </section>

</template>



<script>
import data from "../../data/data.json";

export default {
   name: "Projects",
  props: {},

  data() {
    return {
      projectList: data.projects.projectList,
      currentFilter: data.projects.defaultFilter,
    };
  },
  computed: {
    filteredProjects() {
      var projectList = data.projects.projectList;
      var filter = this.currentFilter;
      var filtered = projectList.filter(function(x) {
        return x.filter === filter;
      });
      return filtered;
    },
    filters() {
      var filterList = [];
      var projectList = data.projects.projectList;
      filterList = projectList.filter(function(x) {
        if (!filterList.includes(x.filter)) {
          filterList.push(x.filter);
          return x.filter;
        }
      });
      return filterList;
    },
  },
  methods: {
    setFilter(event) {
      this.currentFilter = event.target.dataset.filter;
    },
  },
}; 

</script>