<template>

  <section id="about" class="light-section">
    <div class="container-fluid">
      <h1 class="section-header">About team</h1>
      <h3 class="textik">Under this category you can find all members of Automation team. </h3>
      

      <!-- start of filters  -->

      <div class="row filters">
        <ul class="list-inline mx-auto">
          <li
            v-for="item in filters"
            :key="item.name"
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

        <div id="portfolio-container" class="row">

          <div
            
            v-for="(item, index) in filteredPeople"
            :key="index"
            class="col-6 col-sm-6 col-md-2 col-lg-2 flex-col"
          >

            <div class="portfolio-item">
            <img :src="require(`../../assets/images/team/${item.image}`)" />
              <div class="overlay">
                
                  <div class="about-item-content">
                    <h3>{{ item.title }}</h3>
                  </div>
                
              </div>

                <!-- <h2>{{ item.name }}</h2>
                <h5>{{ item.position }}</h5> -->

            </div>

            <div class="nameee">
              <h2>{{ item.name }}</h2>
              <h5>{{ item.position }}</h5>
            </div>

          </div>
        </div> 

       
             
      <!-- end of skill container  -->
    </div>      
    <!-- end of main container  -->

  </section>

</template>

<script>
import data from "../../data/data.json";

export default {
   name: "About",
  props: {},

  data() {
    return {
      teamList: data.about.teamList,
      currentFilter: data.about.defaultFilter,
    };
  },
  computed: {
    filteredPeople() {
      var teamList = data.about.teamList;
      var filter = this.currentFilter;
      var filtered = teamList.filter(function(x) {
        return x.filter === filter;
      });
      return filtered;
    },
    filters() {
      var filterList = [];
      var teamList = data.about.teamList;
      filterList = teamList.filter(function(x) {
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
