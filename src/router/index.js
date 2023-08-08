import Vue from "vue";
import VueRouter from "vue-router";

//import App from "@/App.vue";
import UserSignUp from "@/components/UserSignUp.vue";
import UserDashboard from "@/components/UserDashboard.vue";
import UserLogIn from "@/components/UserLogIn.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";

import AllProducts from "@/components/AllProducts.vue";
import NewProduct from "@/components/NewProduct.vue";
import AllCustomers from "@/components/AllCustomers.vue";
import NewCustomer from "@/components/NewCustomer.vue";
import AllSuppliers from "@/components/AllSuppliers.vue";
import NewSupplier from "@/components/NewSupplier.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'signup',
    component: UserSignUp
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogIn
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: UserDashboard,
    meta: { requiresAuth: true } // Add this meta field to mark routes that require authentication
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: "/products",
    name: "products",
    component: AllProducts,
    meta: { requiresAuth: true }
  },
  {
    path: "/new-product",
    name: "newproduct",
    component: NewProduct,
    meta: { requiresAuth: true }
  },
  {
    path: "/customers",
    name: "customers",
    component: AllCustomers,
    meta: { requiresAuth: true }
  },
  {
    path: "/new-customer",
    name: "newcustomer",
    component: NewCustomer,
    meta: { requiresAuth: true }
  },
  {
    path: "/suppliers",
    name: "suppliers",
    component: AllSuppliers,
    meta: { requiresAuth: true }
  },
  {
    path: "/new-supplier",
    name: "newsupplier",
    component: NewSupplier,
    meta: { requiresAuth: true }
  }
];


const router = new VueRouter({
  routes,
});


// Navigation guard to check authentication before accessing routes marked with requiresAuth: true
router.beforeEach((to, from, next) => {
  const isAuthenticated = router.app.isAuthenticated; // Access the prop from the router's app instance

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      });
    } else {
      next(); // Allow access to the authenticated route
    }
  } else {
    next(); // No authentication required, allow access
  }
});



export default router;
