 <template>
    <div id="main-container">
      <header class="header-slot">
        <slot name="header"></slot>
      </header>

      <sidebar class="sidebar-slot">
       <slot name="sidebar"></slot>
      </sidebar>

      <main class="main-slot">
        <slot></slot>
      </main>
<!-- 
      <footer class="footer-slot">
        <slot name="footer"></slot>
      </footer> -->
    
    </div>
  </template>
  
  <script>
  export default {
    name: "Layout",
  };
  </script>
  
  <style >
  #main-container{
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    
  }
  .header-slot {
    background: #e1dfdf;
    padding: 10px 6px;
    height: 80px;
    width: 100%;
    position: absolute;
    overflow-wrap: break-word;
  }
.sidebar-slot{
  background: #d7d4d4;
    margin-top: 80px;
    height: 100%;
    width: 150px;
    position: absolute;
    overflow-wrap: break-word;
}
  .main-slot {
    background: #efebeb;
    margin-left: 150px;
    margin-top: 80px;
    height: 100vh;
    width: 100%;
    position: absolute;
    overflow-wrap: break-word;
    
  }
  /* .footer-slot {
    background: #eee;
    padding: 10px 6px;
  } */
  </style> 


