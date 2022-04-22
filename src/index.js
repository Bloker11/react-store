import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-f044wj3c.us.auth0.com
// 34kH4xl5TFe5x0WeG3hihorbl975jyG8
ReactDOM.render(
<Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation = "localstorage">
    <UserProvider>
        <ProductsProvider>
            <FilterProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterProvider> 
        </ProductsProvider>
    </UserProvider>
</Auth0Provider>


, document.getElementById('root'))