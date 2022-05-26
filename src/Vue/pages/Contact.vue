<template>

  <section id="contact" class="light-section">

    <div class="container-fluid">
      <h1 class="section-header">Contact us</h1>


      <div id="contact-container" class="row">

        <div class="col-sm-12 col-md-6">
            <h2 style="text-transform: uppercase">Where you can find us</h2>


            <div class="contact-info">

              <ul class="list-group list-group-flush">

                <li class="list-group-item"                >
                    <h3 class="d-inline">
                        <font-awesome-icon :icon="['fas', 'location-dot']" /> Location:
                    </h3>
                    <br class="d-md-none" />

                    <span class="company">{{ contact.company }}</span>
                    <span class="street">{{ contact.street }}</span>
                    <span class="city">{{ contact.city }}</span>
                </li>


                <li class="list-group-item">
                    <h3 class="d-inline">
                        <font-awesome-icon :icon="['fas', 'phone']" /> Phone (Manager):
                    </h3>
                    <br class="d-md-none" />

                    <span class="phone">{{ contact.phone }}</span>
                </li>


                <li class="list-group-item">
                    <h3 class="d-inline">
                        <font-awesome-icon :icon="['fas', 'envelope']" /> Email (Manager):
                    </h3>
                    <br class="d-md-none" />

                    <a :href="'mailto:' + contact.email">
                        <span class="email">{{ contact.email }}</span>
                    </a>

                </li>


                <li class="list-group-item">
                    <h3 class="d-inline">
                        <font-awesome-icon :icon="['fab', 'slack']" /> Social (Team):
                    </h3>
                    <br class="d-md-none" />

                    <span class="social">{{ contact.social }}</span>
                </li>

              </ul>
            </div>


            <div class="video-ibm">
                <iframe 
                    width="75%" 
                    height="240" 
                    src="https://www.youtube.com/embed/HSY4NwA3JE0" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>


        </div>


        <div class="col-sm-12 col-md-6">
          <div class="map">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.8737587196174!2d17.069513551108244!3d48.170514279124156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8c7691917bd5%3A0xfd71f4a0e053c0fa!2sWestend%20Gate%20Building%20B%20%E2%80%93%20IBM%20ISC.!5e0!3m2!1sen!2sdk!4v1653227647249!5m2!1sen!2sdk"
                width="90%"
                height="540"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            
          </div>
        </div>


      </div>

    </div>
  </section>

</template>

<script>
import data from "../../data/data.json";


export default {
  name: "Contact",
  props: {},
  components: {},
  data() {
    return {
      contact: data.contact
    };
  },

};
</script>