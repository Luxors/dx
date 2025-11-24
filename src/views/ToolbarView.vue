<script lang="ts" setup>
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar'
</script>

<template>
  <DxToolbar>
    <DxItem
      location="before"
      widget="dxButton"
      :options="{
        icon: 'back',
      }"
    />
    <DxItem
      location="before"
      widget="dxButton"
      :options="{
        icon: 'plus',
      }"
    />
    <DxItem
      location="after"
      locate-in-menu="auto"
      widget="dxButton"
      :options="{
        icon: 'plus',
      }"
    />
  </DxToolbar>
</template>
