import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { convertBooleanMapToArray } from "@/lib/utils";
import { Checkbox, Collapse, FormControlLabel, FormGroup } from "@mui/material";
import kebabCase from "lodash/fp/kebabCase";
import cx from "classnames";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function CheckboxFilterGroup(props: {
  title: string;
  labels: (string | number)[];
  onChange: (values: any) => void;
}) {
  const { onChange, title, labels } = props;
  const [isOpen, setIsOpen] = useState(false);
  const methods = useForm();

  methods.watch((values) => {
    const valuesArray = convertBooleanMapToArray(values);
    onChange(valuesArray);
  });

  return (
    <FormProvider {...methods}>
      <button
        className="flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <b className="mb-3 text-brand-primary text-left">{title}</b>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </button>
      <Checkboxes className="h-auto" labels={labels} expanded={isOpen} />
    </FormProvider>
  );
}

function Checkboxes(props: {
  labels: (string | number)[];
  className?: string;
  expanded: boolean;
}) {
  const { expanded, className = "" } = props;
  const { register } = useFormContext();

  return (
    <FormGroup className={cx(className)}>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="flex flex-col">
          {props.labels?.map((label) => {
            return (
              <FormControlLabel
                className="p-0"
                control={
                  <Checkbox
                    className="py-0"
                    {...register(kebabCase(label.toString()))}
                  />
                }
                label={<span className="text-xs">{label}</span>}
                key={label}
              />
            );
          })}
        </div>
      </Collapse>
    </FormGroup>
  );
}
