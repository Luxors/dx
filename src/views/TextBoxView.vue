<script setup lang="ts">
import DxTextBox from 'devextreme-vue/text-box'
const rules = { X: /[02-9]/ }
</script>

<template>
  <div class="form">
    <div class="dx-fieldset">
      <div class="dx-field">
        <div class="dx-field-label">Default mode</div>
        <div class="dx-field-value">
          <DxTextBox value="John Smith" :input-attr="{ 'aria-label': 'Name' }" />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">With placeholder</div>
        <div class="dx-field-value">
          <DxTextBox
            placeholder="Enter full name here..."
            :input-attr="{ 'aria-label': 'Full Name' }"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">With clear button</div>
        <div class="dx-field-value">
          <DxTextBox
            :show-clear-button="true"
            :input-attr="{ 'aria-label': 'Name' }"
            value="John Smith"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Password mode</div>
        <div class="dx-field-value">
          <DxTextBox
            :show-clear-button="true"
            mode="password"
            :input-attr="{ 'aria-label': 'Password' }"
            placeholder="Enter password"
            value="f5lzKs0T"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Text mask</div>
        <div class="dx-field-value">
          <DxTextBox
            :mask-rules="rules"
            :input-attr="{ 'aria-label': 'Mask' }"
            mask="+1 (X00) 000-0000"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Disabled</div>
        <div class="dx-field-value">
          <DxTextBox :disabled="true" :input-attr="{ 'aria-label': 'Name' }" value="John Smith" />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Email (read only)</div>
        <div class="dx-field-value">
          <DxTextBox
            :read-only="true"
            :input-attr="{ 'aria-label': 'Email' }"
            :hover-state-enabled="false"
            value="smith@corp.com"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Invalid</div>
        <div class="dx-field-value">
          <DxTextBox
            value="John Smith"
            :input-attr="{ 'aria-label': 'Name' }"
            :validation-status="'invalid'"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Whith icons before</div>
        <div class="dx-field-value">
          <DxTextBox
            value="John Smith"
            :input-attr="{ 'aria-label': 'Name' }"
            :buttons="[
              {
                name: 'money',
                location: 'before',
                options: {
                  icon: 'money',
                  stylingMode: 'text',
                },
              },
            ]"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Whith icons after</div>
        <div class="dx-field-value">
          <DxTextBox
            value="John Smith"
            :input-attr="{ 'aria-label': 'Name' }"
            :buttons="[
              {
                name: 'bell',
                location: 'after',
                options: {
                  icon: 'bell',
                  stylingMode: 'text',
                },
              },
              {
                name: 'attach',
                location: 'after',
                options: {
                  icon: 'attach',
                  stylingMode: 'contained',
                },
              },
              {
                name: 'money',
                location: 'after',
                options: {
                  icon: 'money',
                  stylingMode: 'outlined',
                },
              },
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
