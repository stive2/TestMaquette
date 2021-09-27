<template>
  <q-page class="q-gutter-y-sm">
    <div style="margin-top: 125px">
    <!-- Boucle d'afficharge des différentes catégorie de vidéo -->
      <div v-for="link in links" :key="link.text" >
        <div v-if="link.visible" class="q-pa-md bg-green-1" dense>
        <span class="text-h5 text-bold">{{ link.text}}</span><br>

        <!-- Boucle d'afficharge des vidéo pour chaque catégorie -->
        <q-virtual-scroll
        :items="links3"
          virtual-scroll-horizontal
        >
          <template v-slot="{item, index }">
            <div :key="index" class="row items-center q-pa-md">
              <q-card class="my-card bg-green-1 shadow-0">
                <q-video :src="item.src" />
                <q-card-section>
                  <span class="text-bold">Titre de la vidéo sur deux lignes maximums</span><br>
                  <div class="row">
                    <div class="col-3">
                      <q-avatar round size="40px">
                        <img src="../assets/images/gohze2.png">
                      </q-avatar>
                    </div>
                    <div class="col-9 text-grey-5">
                      <span>Nom de la chaîne</span><br>
                      <span>il y'a 2 jours</span>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </template>
        </q-virtual-scroll>
        </div>
      </div>
    </div>
    <q-page-sticky expand position="top" class="bg-grey-1 text-grey" style="opacity:.9">
        <!-- NavBar de filtrage de catégorie de vidéo -->
        <q-toolbar>
          <q-btn flat round dense icon="apps" class="q-mr-sm" />
          <q-icon name="" />
          <span class="text-h4">SANTE & BIEN-ETRE </span>
        </q-toolbar>
        <q-toolbar>
          <q-virtual-scroll
            :items="links2"
            virtual-scroll-horizontal
          >
            <template v-slot="{item, index }">
              <div :key="index" class="row items-center">
                <q-chip :color="item.color" clickable class="glossy" @click="showHide(index)">
                  {{ item.text }}
                </q-chip>
              </div>
            </template>
          </q-virtual-scroll>
        </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      /* Liste des catégories de vidéo (static) */
      links: [
        { text: 'Tendances', visible: true},
        { text: 'Médécine prophétique', visible: false},
        { text: 'Médécine' , visible: false},
        { text: 'Jeune' , visible: true},
        { text: 'Système imunitaire.' , visible: false},
        { text: 'Naturopat' , visible: false},
        { text: 'Nutrition' , visible: true},
        { text: 'Bien-être' , visible: false}
      ],

      /* Liste de filtrage de catégorie (static) */
      links2: [
        { text: 'TOUS', color: 'orange'},
        { text: 'MED. PROPHE', color: null},
        { text: 'MEDECINE' , color: null},
        { text: 'JEUNE' , color: 'orange'},
        { text: 'SYSTEME IMU.' , color: null},
        { text: 'NATUROPAT' , color: null},
        { text: 'NUTRITION' , color: 'orange'},
        { text: 'BIEN-ETRE', color: null}
      ],

      /* Liste des vidéos à afficher */
      links3: [
        { src: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0'},
        { src: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0'},
        { src: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0'},
        { src: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0'},
        { src: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0'},
        { src: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0'},
        { src: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0'},
        { src: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0'}
      ]
    }
  },
  methods: {
    /* Fonction pour afficher/masquer une catégorie de vidéo */
    showHide: function (index) {
      this.links[index].visible = !this.links[index].visible;
      if (this.links[index].visible) {
        this.links2[index].color = 'orange'
      } else {
        this.links2[index].color = null
      }
    },
   }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px

.nb
  position: fixed
  top: 0
  width: 100%

.main
  margin-top: 30px

</style>
