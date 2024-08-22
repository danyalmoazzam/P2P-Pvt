import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CircleDashed } from "lucide-react";

import { cn } from "@/lib/utils";

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function StatusButton() {
  const [status, setStatus] = useState<
    "loading" | "Subscribe" | "Subscribed Successfully"
  >();
  const isEnabled = !status || status === "Subscribe";

  const changeStatus = async () => {
    if (!isEnabled) {
      return;
    }

    setStatus("loading");
    await wait(1500);
    setStatus("Subscribed Successfully");
    await wait(1500);
    setStatus("Subscribe");
  };

  return (
    <button
      onClick={changeStatus}
      disabled={!isEnabled}
      className="group relative h-10 min-w-40 overflow-hidden rounded-md bg-blue-600 px-6 tracking-wider text-sm font-semibold text-gray-100 transition-all duration-500 hover:bg-blue-700"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          // Remount the component so that the animation can be restarted
          key={status}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.045 }}
          className={cn("flex items-center justify-center gap-1")}
        >
          {status === "Subscribed Successfully" && (
            <motion.span
              className="h-fit w-fit"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.075, type: "spring" }}
            >
              <CheckCircle2 className="h-4 w-4 fill-white stroke-blue-500 group-hover:stroke-blue-600" />
            </motion.span>
          )}

          {status == "loading" ? (
            <CircleDashed className="h-4 w-4 animate-spin" />
          ) : (
            status ?? "Subscribe"
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
