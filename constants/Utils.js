import Toast from 'react-native-root-toast';


_emailValidate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    return false;
  } else {
    console.log("Email is Correct");
    return true;
  }
}

// Add a Toast on screen.
toastShow = (msg) => {
  Toast.show(msg, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    }
  });

}

handleClick = () => {
  const min = 1;
  const max = 100;
  const rand = min + Math.random() * (max - min);
  return rand
}

export default {
  _emailValidate,
  toastShow,
  handleClick,
}