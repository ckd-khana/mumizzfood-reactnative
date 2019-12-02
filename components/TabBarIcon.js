import React from 'React';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Color from '../constants/Color';


export default function TabBarIcon(props) {
  if (props.name === 'user') {
    return (
      <FontAwesome
        name={props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Color.tabIconSelected : Color.tabIconDefault}
      />
    );
  } else {
    return (
      <Ionicons
        name={props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Color.tabIconSelected : Color.tabIconDefault}
      />
    );
  }

}
