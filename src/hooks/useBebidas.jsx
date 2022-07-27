import { useContext } from "react";
import BebidasContext from "../context/BebidasProvider";


import React from 'react'

const useBebidas = () => { 
  return useContext(BebidasContext)
}

export default useBebidas