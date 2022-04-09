import { Mail,Layers,CreditCard, LogOut } from 'react-feather'

const Dashboard = {
  id: 'Dashboard',
  title: 'Dashboard',
  icon: <Layers size={20} />,
  navLink: '/home'
}
const Profile = {
  id: 'profile',
  title: 'My Profile',
  icon: <Mail size={20} />,
  navLink: '/Profile'
}

const Payment = {
  id: 'payment',
  title: 'Payments',
  icon: <CreditCard sizea={20} />,
  navLink: '/Payment'
}

const Logout = {
  id: 'logout',
  title: 'Logout',
  icon: <LogOut sizea={20} />,
  navLink: '/Payment'
}
const menu = [
  Dashboard,
  Profile,
  Payment,
  Logout
]











export default  menu