'use client'

import { Provider } from 'react-redux'
//import { wrapper } from '../../store/store'
import store from "../../store/index";

export const Wrappage = ({ children }) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}