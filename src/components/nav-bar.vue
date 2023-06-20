<template>
  <header class="header">
    <nav class="nav-links">
      <a href="">О нас</a>
      <a href="">Связаться с нами</a>
      <a href="">Контакты</a>
    </nav>
    <nav class="navbar">
      <div class="logo"><a href="#">
          <img src="/src/assets/img/logo.svg" alt="logo"></a>
      </div>
      <div class="search-and-category">
        <!-- <a href=""><span>Каталог</span><img src="/src/assets/img/dropdown-btn.svg" alt=""></a> -->
        <div class="dropdown">
          <button @click="getCategories()" class="btn btn-secondary dropdown-toggle categ-dropdown-btn" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Категории
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-for="category in categories" :key="category.cat_id"><button class="dropdown-item">{{ category.cat_name }}</button></li>
          </ul>
        </div>
        <input type="text" placeholder="Поиск товаров">
      </div>
      <div class="profile-and-basket">
        <button type="button" class="basket-btn"><img src="/src/assets/img/basket.svg" alt="basket-icon"></button>
        <button type="button" class="profile-btn"><img src="/src/assets/img/profile.svg" alt="profile-icon"></button>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from 'axios';
export default {
  name: "nav-bar",

  data() {
    return {
      categories: []
    }
  },
  methods: {
    getCategories() {
      axios.get('/categories/')
      .then((res) => {
        this.categories = res.data.categories;
        // console.log(res.data.categories);
      })
    }
  }
};
</script>

<style scoped>
.nav-links {
  margin-bottom: 30px;
}

.nav-links a {
  font: 16px 'Poppins Medium', sans-serif;
  color: #AAAAAA;
  margin: 0 30px 0 0;
}

.navbar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.search-and-category {
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  height: 33px;
  margin: 0 65px;
}

.dropdown-menu {
  border-radius: 23px;
  --bs-dropdown-min-width: 152px;
  --bs-dropdown-link-active-bg: #702430;
  transition: 0.3s ease;
}

.dropdown-menu button {
  font: 14px 'Poppins SemiBold', sans-serif;
  font-weight: 500;
  color: #444;
}
.dropdown-item {
  border-radius: 23px;
}
.categ-dropdown-btn {
  font: 18px 'Poppins SemiBold', sans-serif;
  color: #fff;
  background-color: #702430;
  border-radius: 23px;
  padding: 5px 20px 5px 27px;
  margin-right: 25px;
  display: flex;
  flex-flow: nowrap;
  align-items: center;
}
.dropdown-toggle::after {
  content: url(/src/assets/img/dropdown-btn.svg);
  border-top: none;
  border-right: none;
  margin-top: -5px;
}

.search-and-category input {
  font: 13px 'Poppins Regular', sans-serif;
  color: #C0C0C0;
  border: 1px solid #DDDDDD;
  border-radius: 23px;
  padding-left: 25px;
  width: 100%;
  background: no-repeat right 15px center url(/src/assets/img/search.svg); 
}
.profile-and-basket button {
  border: none;
  background: none;
}

.basket-btn {
  margin-right: 25px;
}
</style>