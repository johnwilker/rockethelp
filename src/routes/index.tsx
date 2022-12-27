import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../screens/SignIn';
import { AppRoutes } from '../routes/app.routes';

export function Routes(){
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}