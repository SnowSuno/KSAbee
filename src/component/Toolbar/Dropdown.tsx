import React from "react";

interface DropdownProps<V> {
  values: V;
  handle: (value: keyof V) => void;
}

type Option = { [key: string]: string };
type Entry = [string, string];

function Dropdown<V extends Option>({values, handle}: DropdownProps<V>) {
  return <select
    defaultValue=""
    onChange={e => handle(e.target.value as keyof V)}
  >
    {Object.entries(values)
      .sort(compare)
      .map(([key, value]) => (
        <option key={key} value={key}>{value}</option>
      ))}
  </select>
}

const compare = (a: Entry, b: Entry) => (a[0] ? 1 : 0) - (b[0] ? 1 : 0);

export default Dropdown;
