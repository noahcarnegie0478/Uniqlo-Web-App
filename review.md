# Code review - 2500602

## Generic patterns

### Avoid importing the context directly

```jsx
// Don't do this

// SampleContext.jsx
export const SampleContext = createContext({})

// Component.jsx
import {SampleContext} from "./SampleContext"

const context = useContext(SampleContext)

// Do this instead

// SampleContext.jsx
const SampleContext = createContext({})

const useSampleContext = () => useContext(SampleContext)

// which will avoid developers using the context value directly
```

### Avoid declaring functions inside the component declaration

```jsx
// Don't do this

const Component = () => {
  // Function will be redeclared every time the component is rendered
  const fetchFunction = async () => {
    const result = await axios.get("http://localhost:3000/api/banner/");
    // rest of function
  };

  return (
    <div>
      <ComponentChild getValue={fetchFunction}/>
    </div>
  )
}

// Do this instead

 const fetchFunction = async (params) => {
    const result = await axios.get("http://localhost:3000/api/banner/");
    // rest of function
  };

const Component = () => {
  // Function will not be redeclared every time the component is rendered
  return (
    <div>
      <ComponentChild getValue={fetchFunction}/>
    </div>
  )
}
```

### Try to group related states together

```jsx
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favouriteID, setfavouriteID] = useState([]);
  const [error, setError] = useState("");
  const [isValid, SetValid] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [updated, setUpdated] = useState(false);
  const [login, setLogin] = useState(false);
  const [favourite, setFavourite] = useState([]);
  const [cartID, setCartID] = useState([]);
  const [cart, setCart] = useState([]);

```

This can be grouped to

```jsx
const userData = useState({
  user,
  email
  // rest of user data
})
const cartData = useState({
  cartID,
  cart
  // rest of cart data
})
```

Also consider using state management like Zustand, Mobx or Redux

---

## Pages

### Page layout can be abstracted - reapeated code such as UpperNavBar and layout declaration

```jsx
// Don't do this for every pages

// CustomPage.jsx
const CustomPage = () => {
  return (
    <div className="relative min-h-screen pt-20 ">
      <UpperNavBar />
      {/* rest of body */}
    </div>
  )
}

// Do this instead

// PageLayout.jsx
const PageLayout = ({children}) => {
  return (
    <div className="relative min-h-screen pt-20 ">
      <UpperNavBar />
      {children}
    </div>
  )
}

// CustomPage.jsx
const CustomPage = () => {
  return (
    <PageLayout>
      {/* rest of body */}
    </PageLayout>
  )
}

// Or if you use react-router, you can refer to this pattern https://reactrouter.com/start/declarative/routing#layout-routes
```


