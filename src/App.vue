<template>
  <div>
    
    <div v-if="isAuthenticated">
      <SiteHeader :isAuthenticated="isAuthenticated"  :logout="logout"/>
      <div class="container mt-4">
        <h1>Welcome to the Admin Panel!</h1>
        <router-view></router-view>
      </div>
      <SiteFooter />
    </div>
    <div v-else>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Admin Panel</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                      
                        <li class="nav-item">
                          <router-link :to="{ name: 'signup' }" class="btn btn-sm btn-primary">
                                Create Account
                          </router-link>                      
                        </li>
                        <li class="nav-item">
                           <router-link :to="{ name: 'login' }" class="btn btn-sm btn-success">
                                Sign In
                          </router-link>                       
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
      </header>
      <div class="container mt-4">
        <router-view :isAuthenticated="isAuthenticated" @update-authenticated="updateAuthenticated"></router-view>
      </div>   
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import router from "./router";

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
   data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    updateAuthenticated(value) {
      this.isAuthenticated = value;
    },
    logout(){
      this.isAuthenticated = false;
      router.push('login');
    }
  },
  
};
</script>

<style>
/* Custom CSS for the App (if needed) */
</style>
