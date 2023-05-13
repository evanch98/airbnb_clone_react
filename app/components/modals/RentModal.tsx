'use client';

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useState } from "react";

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
