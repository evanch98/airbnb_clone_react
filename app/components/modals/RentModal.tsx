'use client';

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";

// steps of renting a home
enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

const RentModal = () => {
  // hook
  const rentModal = useRentModal();

  // by default, the renting process start from choosing the category
  const [step, setStep] = useState(STEPS.CATEGORY);

  // form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathRoomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: ""
    }
  });

  // one step back
  const onBack = () => {
    setStep((value) => value - 1);
  }

  // one step backward
  const onNext = () => {
    setStep((value) => value + 1);
  }

  // return the actionLabel string appropriately depending on the current step of the user
  const actionLabel = useMemo(() => {
    // if the current step is the price step, it means it is the last step
    // therefore, the actionLabel should be as follows
    if (step === STEPS.PRICE) {
      return "Create";
    }

    // otherwise, the actionLabel should be as follows
    return "Next";
  }, [step]);

  // return the secondaryActionLabel string appropriately depending on the current step of the user
  const secondaryActionLabel = useMemo(() => {
    // if the current step is the category step, it means it is the first step
    // therefore, the secondaryActionLabel should be undefined
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    // otherwise, the secondaryActionLabel should be as follows
    return "Back";
  }, [step]);

  // Body content
  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading 
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput 
              onClick={() => {}}
              selected={false}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return ( 
    <Modal 
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Airbnb your home!"
      body={bodyContent}
    />
  );
}

export default RentModal;
