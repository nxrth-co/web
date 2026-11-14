"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div className="border-b border-[rgba(140,83,43,0.12)] py-5 transition-colors">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8C532B] rounded"
      >
        <span className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#8C7E74] group-hover:text-[#8C532B] transition-colors">
            0{index + 1}
          </span>
          <span className="text-base sm:text-lg font-medium text-[#201815] group-hover:text-[#8C532B] transition-colors">
            {question}
          </span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1 flex-shrink-0 text-[#8C7E74] group-hover:text-[#8C532B]"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 pl-8 text-sm sm:text-base leading-relaxed text-[#6E645D]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({
  items,
  className,
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={cn("w-full divide-y-0", className)}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          index={idx}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === idx}
          onToggle={() => toggleItem(idx)}
        />
      ))}
    </div>
  );
}

