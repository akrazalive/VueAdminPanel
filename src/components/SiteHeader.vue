<template>
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
                    <!-- Products -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                            <li> 
                              <router-link :to="{ name: 'products' }" class="dropdown-item">
                              All Products
                              </router-link>
                            </li>
                            <li>
                              <router-link :to="{ name: 'newproduct' }" class="dropdown-item">
                              Add New Product
                              </router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- Suppliers -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="suppliersDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Suppliers
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="suppliersDropdown">
                            <li>
                              <router-link :to="{ name: 'suppliers' }" class="dropdown-item">
                              All Suppliers
                              </router-link>
                            </li>
                            <li>
                              <router-link :to="{ name: 'newsupplier' }" class="dropdown-item">
                              Add New Supplier
                              </router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- Customers -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="customersDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Customers
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="customersDropdown">
                            <li>
                              <router-link :to="{ name: 'customers' }" class="dropdown-item">
                              All Customers
                              </router-link>
                            </li>
                            <li>
                              <router-link :to="{ name: 'newcustomer' }" class="dropdown-item">
                              Add New Customer
                              </router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- My Account -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="myAccountDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            My Account
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="myAccountDropdown">
                            <li><a class="dropdown-item" href="#">Change Profile Details</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

</template>

<script>
export default {
name:'SiteHeader'
};
</script>

<style>
        /* Custom CSS for the navigation, body, and anchors */
        body {
            background-color: #f8f9fa;
        }

        header {
            background-color: #007bff;
        }

        .navbar-brand {
            color: #fff;
            font-size: 24px;
            font-weight: bold;
        }

        .navbar-light .navbar-nav .nav-link {
            color: #fff;
        }

        .navbar-light .navbar-nav .nav-link:hover {
            color: #e0e0e0;
        }

        .navbar-light .navbar-nav .show > .nav-link,
        .navbar-light .navbar-nav .active > .nav-link,
        .navbar-light .navbar-nav .nav-link.show,
        .navbar-light .navbar-nav .nav-link.active {
            background-color: #0056b3;
        }

        .dropdown-menu {
            background-color: #f8f9fa;
            border: none;
        }

        .dropdown-item {
            color: #000;
        }

        .dropdown-item:hover {
            background-color: #e0e0e0;
        }

        .footer {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            text-align: center;
            position: absolute;
            bottom: 0px;
            width: 100%;
        }
    </style>