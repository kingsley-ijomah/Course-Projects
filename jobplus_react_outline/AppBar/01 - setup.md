# create app
cd ~/Desktop
npx create-react-app jobplus_react_frontend
cd jobplus_react_frontend
-

# create directories
- mkdir src/components
- mkdir src/pages

# import font and images assets
git clone https://github.com/kingsley-ijomah/jobplus-react-assets.git ~/Desktop/assets
-
mv ~/Desktop/assets/fonts ~/Desktop/jobplus_react_frontend/src/
mv ~/Desktop/assets/images ~/Desktop/jobplus_react_frontend/public/


# install packages
yarn add @material-ui/core 
yarn add @material-ui/icons
yarn add @material-ui/lab
yarn add react-router-dom

# start local server
yarn start

# Add Browser Router
import { BrowserRouter, useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();
  return (
    <BrowserRouter history={history}>
      <p>Loading from App.js...</p>
    </BrowserRouter>
  );
}