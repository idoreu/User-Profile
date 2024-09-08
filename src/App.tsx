import './App.css';
import ProfileForm from './components/profileForm';
import ProfileDisplay from './components/ProfileDisplay';
import { UserProvider } from './components/utilities';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <UserProvider>
      <div className='container mt-5'>
        <h1 className='container mb-4'>User Profile</h1>
        <ProfileForm />
        <ProfileDisplay/>
      </div>
    </UserProvider>
  );
}

export default App;
