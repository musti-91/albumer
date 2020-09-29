import React from 'react';


// Todo implement theme
const ThemeConnector = (Component: any) => {
  return (props: any) => {
    return (
      <Component {...props}/>
    )
  }
}
export default ThemeConnector;