'use client';

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";

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

  return ( 
    <Modal 
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
      title="Airbnb your home!"
    />
  );
}

export default RentModal;
