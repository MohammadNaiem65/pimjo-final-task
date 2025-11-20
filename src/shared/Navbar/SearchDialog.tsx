"use client";

import { Search } from "lucide-react";
import { useRef } from "react";
import Button from "../Button";
import Input from "./Input";

export default function SearchDialog() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className="flex items-center">
      <Button className="py-0" onClick={showModal}>
        <Search />
      </Button>

      <dialog
        ref={modalRef}
        closedby="any"
        className="absolute top-1/2 left-1/2 min-h-56 min-w-80 -translate-x-1/2 -translate-y-1/2 rounded-xl backdrop:bg-[#374151CC]"
      >
        <Input className="w-full rounded-none border-0 border-b [&_input]:rounded-none [&_input]:border-0" />

        <div className="mt-16">
          <p className="text-center text-sm text-gray-500">
            Logic needs to be implemented.
          </p>
          <Button
            className="mx-auto mt-4 block cursor-pointer rounded-xl bg-gray-800 text-white hover:bg-gray-800/90"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </dialog>
    </div>
  );
}
