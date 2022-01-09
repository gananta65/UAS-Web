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
    path: "/employees/history",
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

export default router;
