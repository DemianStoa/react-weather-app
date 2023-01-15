import React, { useState } from 'react'
import './unit.css'

export const UnitSelector = () => {
    const [unit, setUnit] = useState("metric")

  return (
     <div>

        <input type="checkbox" id="unit" className="toggle"
        value={unit}
        />
        <label for="unit"></label>
     </div>
  )
}
