import React from "react";
import styles from "./ToggleSwitch.module.css"; // Import CSS module

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <>
      <label className={`${styles.switch} flex`}>
        <input
          type="checkbox"
          className={styles.input}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span
          className={styles.slider + (checked ? ` ${styles.checked}` : "")}
        ></span>
      </label>
      <label className="flex-shrink-0 text-sm text-heading ps-3 cursor-pointer label_n_design">
        Kom ihåg mig
      </label>
    </>
  );
}

export default ToggleSwitch;
