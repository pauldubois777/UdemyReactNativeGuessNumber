// TODO: Not 100% sure this is the way to go for common styles shared between platform-specific components.
//       Created this file when splitting ButtonPrimary into .android and .ios versions.
//       Maybe move the actual Stylesheet.create here?

import Colors from '../constants/colors';

export default {
  buttonPrimary: {
    buttonView: {
      backgroundColor: Colors.primary,
      paddingVertical: 6,
      paddingHorizontal: 15,
      borderRadius: 10
    },
    buttonText: {
      color: Colors.lightText,
      fontSize: 18,
      textAlign: 'center'
    }
  }
};
