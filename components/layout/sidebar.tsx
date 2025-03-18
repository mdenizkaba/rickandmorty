"use client";
import Card from "../card";
import Headings from "../headings";
import RadioGroup from "../radioGroup";
import Text from "../text";
import React from "react";
import { Button } from "../ui/button";
import { useQueryState } from "nuqs";

const statusOptions = [
  { value: "", label: "All" },
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];

const genderOptions = [
  { value: "", label: "All" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "genderless", label: "Genderless" },
  { value: "unknown", label: "Unknown" },
];

export default function Sidebar() {
  const [status, setStatus] = useQueryState('status', { defaultValue: '' })
  const [gender, setGender] = useQueryState('gender', { defaultValue: '' })
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div>
          <Headings level={4}>Filters</Headings>
          <Text className="mt-1">Filter characters by status and gender</Text>
        </div>
        <div>
          <Headings level={6}>Status</Headings>
          <RadioGroup
            name="status"
            options={statusOptions}
            defaultValue={status}
            className="mt-2"
            onChange={setStatus}
          />
        </div>
        <div>
          <Headings level={6}>Gender</Headings>
          <RadioGroup
            name="gender"
            options={genderOptions}
            defaultValue={gender}
            className="mt-2"
            onChange={setGender}
          />
        </div>
        <Button className="mt-2" onClick={() => {setStatus(''); setGender('')}}>Reset Filters</Button>
      </div>
    </Card>
  );
}
