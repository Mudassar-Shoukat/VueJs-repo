<template>
    <div>
      <header class="header-slot">
        <slot name="header"></slot>
      </header>
      <main class="main-slot">
        <slot></slot>
      </main>
      <footer class="footer-slot">
        <slot name="footer"></slot>
       
      </footer>
    </div>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>
  .header-slot {
    background: #e8d2d2;
    padding: 10px 6px;
  }
  .main-slot {
    padding: 16px 6px;
  }
  .footer-slot {
    background: #eee;
    padding: 10px 6px;
  }
  </style>