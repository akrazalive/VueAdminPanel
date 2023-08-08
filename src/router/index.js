import Vue from "vue";
import VueRouter from "vue-router";

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
    component: UserDashboard
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
  },
  {
    path: "/product/new",
    name: "newproduct",
    component: NewProduct,
  },
  {
    path: "/customers",
    name: "customers",
    component: AllCustomers,
  },
  {
    path: "/customer/new",
    name: "newcustomer",
    component: NewCustomer,
  },
  {
    path: "/suppliers",
    name: "suppliers",
    component: AllSuppliers,
  },
  {
    path: "/supplier/new",
    name: "newsupplier",
    component: NewSupplier,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
