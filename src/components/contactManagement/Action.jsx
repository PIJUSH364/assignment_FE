import React from "react";
import Button from "../common/button/Button";

export default function Action() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <Button title="search" />
        <Button title="filter" />
      </div>

      <div>
        <Button title="add new" />
      </div>
    </div>
  );
}
