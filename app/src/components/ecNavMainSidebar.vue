<template>
        <!-- COMPONENT navbar-area START -->
    <div id="navbar-area">
             
        <!-- COMPONENT sidebar-data START -->
        <div id="sidebar-data">
            
            <!-- COMPONENT header-brand START -->
            <div>
              <h3 class="header-brand">VerPijp</h3>
                <ul class="nav nav-pills">
                  <router-link to="gallery" tag="li" active-class="active"><a>Gallery</a></router-link>
                  <router-link to="about" tag="li" active-class="active"><a>About</a></router-link>
                </ul>
            </div> <!-- COMPONENT header-brand END -->
            
        </div><!-- COMPONENT sidebar-data END -->
    </div><!-- COMPONENT navbar-area END -->
</template>