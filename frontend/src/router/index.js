import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Dashboard from "../views/Dashboard.vue";
import Employees from "../views/Employees.vue";
import Reports from "../views/Reports.vue";
import EmployeeForm from "../views/EmployeeForm.vue";
import EmployeeHistory from "../views/EmployeeHistory.vue";
import EmployeeEdit from "../views/EmployeeEdit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/employees",
    name: "Employees",
    component: Employees,
  },
  {
    path: "/employees/new",
    name: "EmployeeForm",
    component: EmployeeForm,
  },
  {
    path: "/employees/edit/:id",
    name: "EmployeeEdit",
    component: EmployeeEdit,
  },
  {
    path: "/employees/history/:id",
    name: "EmployeeHistory",
    component: EmployeeHistory,
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("login"));
  if (to.name !== "Admin" && to.name !== "Home" && !isAuthenticated) {
    next({ name: "Admin" });
  } else if (to.name === "Admin" && isAuthenticated) {
    next({ name: "Dashboard" });
  } else next();
});

export default router;
