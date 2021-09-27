<template>
  <q-layout view="hHh lpR fFf" class="bg-white">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <!-- NavBar contenant le logo, la barre de recherche et le nom de l'utilisateur connecté -->
      <q-toolbar class="GNL__toolbar bg-grey-9">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="apps"
          class="q-mr-sm"
        />

        <q-toolbar-title shrink class="row items-center no-wrap">
          <img src="../assets/images/gohze.png">
        </q-toolbar-title>

        <q-space />

        <q-input outlined rounded dense bg-color="grey-7" label-color="orange" v-model="search" style="width: 20%" placeholder="Recherche">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>
        <q-btn
            flat
            dense
            round
            aria-label="Menu"
            icon="apps"
            class="q-mr-sm"
            color="purple"
          />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-item clickable v-ripple>
            <q-item-section side>
              <q-avatar round size="40px">
                <img src="../assets/images/gohze2.png">
              </q-avatar>
            </q-item-section>
            <q-space />
            <q-item-section>
              <q-item-label class="text-bold text-white text-h6">Halimatou</q-item-label>
            </q-item-section>
          </q-item>
          <q-btn
            flat
            dense
            round
            aria-label="Menu"
            icon="apps"
            class="q-mr-sm"
          />
        </div>
      </q-toolbar>

      <!-- NavBar contenant le nom de l'application et les icône -->
      <q-toolbar shrink class="row items-center no-wrap bg-black" style="height: 20px">
        <span class="q-ml-sm text-white text-bold text-h5">Smuuse</span>
        <q-space />
        <q-btn
          flat
          dense
          round
          label="flow"
          class="q-pa-md text-white"
        />

        <q-btn
          flat
          dense
          round
          label="sista's"
          class="q-pa-md text-white"
        />
        <q-space />
        <q-btn v-if="$q.screen.gt.sm" round dense flat color="white" icon="cloud_upload"/>
        <q-btn round dense flat color="white" icon="notifications"/>
        <q-btn round dense flat color="white" icon="settings"/>
      </q-toolbar>
    </q-header>

    <!-- Menu lateral droit -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <div>
          <q-card
            class="text-white text-center shadow-0"
            style="background: radial-gradient(circle, #ffc800 0%, #ff00d4 100%)"
          >
            <q-card-section >
              <span class="text-h6"> Halimatou </span><br>
              <span class="text-italic"> Compte personnel </span>
            </q-card-section>
            <q-card-section>
              <q-avatar size="90px">
                <img src="../assets/images/gohze2.png">
              </q-avatar>
            </q-card-section>
            <q-card-section>
              <span class="text-h6  text-italic"> Celui qui fait un atome de bien le verra... </span><br>
              <span class="text-italic"> coran 99 : 7 </span>
            </q-card-section>
          </q-card>
        </div>
        <q-list padding class="text-grey-8">
          <q-item class="GNL__drawer-item" v-ripple v-for="link in links" :key="link.text" :to="link.to" clickable active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon :name="link.icon"/>
            </q-item-section><br>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { fasGlobeAmericas, fasFlask } from '@quasar/extras/fontawesome-v5'
export default {
  name: 'GoogleNewsLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      links: [
        { icon: fasGlobeAmericas, text: 'Mon flow' },
        { icon: 'favorite', text: 'Mes favoris' },
        { icon: 'movie', text: 'Mes publications' },
        { icon: 'apps', text: 'Thématiques', to: '/'},
        { icon: 'timer', text: 'Time shahid' },
        { icon: 'star', text: 'Hassanites' },
        { icon: 'settings', text: 'Paramettres' }
      ]
    }
  },
}
</script>

<style lang="sass">
.GNL
  &__toolbar
    height: 60px
  &__toolbar-input
    width: 25%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000

.my-menu-link
  color: white
  background: grey
</style>
