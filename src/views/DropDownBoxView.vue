<script lang="ts" setup>
import DxDropDownButton from 'devextreme-vue/drop-down-button'

import user from '@/assets/images/user.png'

const userPhoto = user
</script>

<template>
  <div>
    <div class="dx-field">
      <div class="dx-field-label">Text and icon</div>
      <div class="dx-field-value">
        <DxDropDownButton :drop-down-options="{ width: 230 }" text="Download Trial" icon="save" />
      </div>
    </div>

    <div class="dx-field">
      <div class="dx-field-label">Custom template and actions</div>
      <div class="dx-field-value">
        <DxDropDownButton
          :split-button="true"
          :use-select-mode="false"
          display-expr="name"
          key-expr="id"
          template="dropDownButtonTemplate"
        >
          <template #dropDownButtonTemplate>
            <div class="button-img-container">
              <div class="button-img-indicator" />
              <img :src="userPhoto" class="button-img" alt="employee" />
            </div>
            <div class="text-container">
              <div class="button-title">Olivia Peyton</div>
              <div class="button-row">IT Manager</div>
            </div>
          </template>
        </DxDropDownButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-img-container {
  position: relative;
  height: 32px;
}
.button-img {
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
}
.text-container {
  padding-inline: 12px 4px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.button-title {
  line-height: 20px;
}

.button-row {
  font-size: 12px;
  line-height: 14px;
  opacity: 0.6;
}
</style>
