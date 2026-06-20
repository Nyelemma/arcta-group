"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./Reveal";
import { Icon, type IconName } from "./Icons";

export type IncludeGroup = {
  title: string;
  icon: IconName;
  items: string[];
};

type ServiceIncludesProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  groups: IncludeGroup[];
  muted?: boolean;
};

export default function ServiceIncludes({
  eyebrow,
  title,
  description,
  groups,
  muted = false,
}: ServiceIncludesProps) {
  return (
    <section className={muted ? "bg-mist-100 py-20 lg:py-28" : "bg-white py-20 lg:py-28"}>
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={staggerItem}
              className="rounded-3xl border border-mist-200 bg-white p-7 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                  <Icon name={group.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy-900">{group.title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-mist-700">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
