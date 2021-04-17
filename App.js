import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UsersScreen from './screens/users';
import PostsScreen from './screens/posts';
import DetailScreen from './screens/detail';


const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
  },
  Posts: {
    screen: PostsScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
}, {
  initialRouteName: 'Users',
})

export default createAppContainer(AppNavigator)
