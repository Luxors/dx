<script setup lang="ts">
import { ref } from 'vue'

import weather from '@/assets/images/weather.png'
import logo from '@/assets/images/logo.svg'

import DxButton from 'devextreme-vue/button'
import DxButtonGroup from 'devextreme-vue/button-group'

const iconWeather = weather
const iconLogo = logo

const colors = ref([
  {
    type: 'b',
    color: '#2A68DF',
  },
  {
    type: 'h',
    color: '#3978F2',
  },
  {
    type: 'f',
    color: '#285fca',
  },
  {
    type: 'a',
    color: '#1E5BD2',
  },
])

const buttonGroupItems = ref([
  {
    icon: 'alignleft',
    alignment: 'left',
    hint: 'Align left',
  },
  {
    icon: 'aligncenter',
    alignment: 'center',
    hint: 'Center',
  },
  {
    icon: 'alignright',
    alignment: 'right',
    hint: 'Align right',
  },
  {
    icon: 'alignjustify',
    alignment: 'justify',
    hint: 'Justify',
  },
])
</script>

<template>
  <div class="container">
    <!-- ========================================================================= -->
    <div>
      <div class="column-header">Normal</div>
      <div class="cols">
        <div>
          <div class="row">
            <DxButton text="Contained" type="normal" styling-mode="contained" />
            <DxButton text="Outlined" type="normal" styling-mode="outlined" />
            <DxButton text="Text" type="normal" styling-mode="text" />
          </div>
          <div class="row">
            <DxButton text="Contained" type="normal" styling-mode="contained" icon="check" />
            <DxButton text="Contained" type="normal" styling-mode="contained" :icon="iconLogo" />
            <DxButton text="Outlinged" type="normal" styling-mode="outlined" :icon="iconWeather" />
            <DxButton text="Text" type="normal" styling-mode="text" icon="check" />
          </div>
          <div class="row">
            <DxButton type="normal" styling-mode="contained" :icon="iconWeather" />
            <DxButton type="normal" styling-mode="outlined" icon="check" />
            <DxButton type="normal" styling-mode="text" icon="check" />
          </div>
          <div class="row">
            <DxButton text="Contained" type="normal" styling-mode="contained" :disabled="true" />
            <DxButton text="Outlined" type="normal" styling-mode="outlined" :disabled="true" />
            <DxButton text="Text" type="normal" styling-mode="text" :disabled="true" />
            <DxButton text="Text" type="normal" styling-mode="text" icon="check" :disabled="true" />
            <DxButton type="normal" styling-mode="text" icon="check" :disabled="true" />
          </div>
        </div>
        <div>
          <div class="row">
            <DxButtonGroup :items="buttonGroupItems" />
          </div>
          <div class="row">
            <DxButtonGroup :items="buttonGroupItems" stylingMode="outlined" />
          </div>
        </div>
      </div>
    </div>
    <!-- ========================================================================= -->
    <div>
      <div class="column-header">Default</div>
      <div class="row">
        <div
          v-for="(item, i) in colors"
          :key="i"
          style="width: 40px; height: 40px; color: azure"
          :style="{ backgroundColor: item.color }"
        >
          {{ item.type }}
        </div>
      </div>
      <div class="row">
        <DxButton text="Contained" type="default" styling-mode="contained" />
        <DxButton text="Containged" type="default" styling-mode="contained" icon="check" />
        <DxButton type="default" styling-mode="contained" icon="check" />
      </div>
      <div class="row">
        <DxButton text="Contained" type="default" styling-mode="contained" :disabled="true" />
        <DxButton
          text="Contained"
          type="default"
          styling-mode="contained"
          icon="check"
          :disabled="true"
        />
        <DxButton type="default" styling-mode="contained" icon="check" :disabled="true" />
      </div>
    </div>
    <!-- ========================================================================= -->
    <div>
      <div>
        <div class="column-header">Success</div>
        <div class="row">
          <DxButton text="Contained" type="success" styling-mode="contained" />
          <DxButton text="Contained" type="success" styling-mode="contained" icon="check" />
          <DxButton type="success" styling-mode="contained" icon="check" />
        </div>
        <div class="row">
          <DxButton text="Contained" type="success" styling-mode="contained" :disabled="true" />
          <DxButton
            text="Contained"
            type="success"
            styling-mode="contained"
            icon="check"
            :disabled="true"
          />
          <DxButton type="success" styling-mode="contained" icon="check" :disabled="true" />
        </div>
      </div>
    </div>
    <!-- ========================================================================= -->
    <div>
      <div class="column-header">Danger</div>
      <div class="row">
        <DxButton :width="120" text="Contained" type="danger" styling-mode="contained" />
        <DxButton text="Contained" type="danger" styling-mode="contained" icon="check" />
        <DxButton type="danger" styling-mode="contained" icon="check" />
      </div>
      <div class="row">
        <DxButton text="Contained" type="danger" styling-mode="contained" :disabled="true" />
        <DxButton
          text="Contained"
          type="danger"
          styling-mode="contained"
          icon="check"
          :disabled="true"
        />
        <DxButton type="danger" styling-mode="contained" icon="check" :disabled="true" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.cols {
  display: flex;
  gap: 2rem;
}
.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.row:last-child {
  margin-bottom: 0;
}
</style>
