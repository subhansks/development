// components/ColorPicker.tsx
import { HexColorPicker } from "react-colorful";
import { useState } from "react";

interface ColorPickerProps {
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange }) => {
  const [color, setColor] = useState("#aabbcc");

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onChange(newColor);
  };

  return (
    <div className="flex flex-col items-center">
      <HexColorPicker color={color} onChange={handleColorChange} />
      <div className="mt-4">
        Selected Color: <span style={{ color }}>{color}</span>
      </div>
    </div>
  );
};

export default ColorPicker;
