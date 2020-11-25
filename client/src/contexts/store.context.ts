import React from "react";
import RootStore from "../store/root.store";

const storeContext = React.createContext(new RootStore());

export default storeContext;
