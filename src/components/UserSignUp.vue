<template>
    <div class="vue-tempalte row">
        <form class="col-md-5 m-auto">
            <h3>Sign Up</h3>
            <div class="form-group mt-4">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group mt-4">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group mt-4">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-sm btn-info btn-block mt-4">Sign Up</button>
            <p class="forgot-password text-right mt-4">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>
<script>
    export default {
        name:'UserSignUp',  
        data() {
            return {}
        }
    }
</script>