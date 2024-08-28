import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      onBlur={onBlur}
      value={value}
      variant="filled"
      size="sm"
      w="85%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default EditableCell;
