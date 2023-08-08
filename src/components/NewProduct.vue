<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="mb-3">
            <label for="productName" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="productName" v-model="productName" required>
          </div>
          <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <select class="form-select" id="category" v-model="category" required>
              <option value="" disabled>Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <!-- Add more options as needed -->
            </select>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" v-model="price" required>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="3" v-model="description" required></textarea>
          </div>
          <div class="mb-3">
            <label for="availability" class="form-label">Availability</label>
            <select class="form-select" id="availability" v-model="availability" required>
              <option value="" disabled>Select availability</option>
              <option value="in_stock">In Stock</option>
              <option value="out_of_stock">Out of Stock</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      category: '',
      price: null,
      description: '',
      availability: '',
    };
  },
};
</script>
